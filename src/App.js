import React, { Component } from 'react';
import './App.css';
import socket from './socket';
import _ from 'lodash';
import moment from 'moment'
import logo from './logo.svg';
import PeerConnection from './PeerConnection';
import MainWindow from './MainWindow';
import CallWindow from './CallWindow';
import CallModal from './CallModal';
import Timer from './Timer';
import ChatWindow from './ChatWindow';

import { Divider, Label, Message, Card, Input, Button, Icon, Grid, Image } from 'semantic-ui-react'
var QRCode = require('qrcode.react');

// patient & physician
var keys = {patient: '0x8Bc8f2CA3d78fe01A7E4bfb118761c751438b854', physician: '0x8Bc8f2CA3d78fe01A7E4bfb118761c751438b854'}
const apiUrl = `https://healthmarketplaceapi20181117074811.azurewebsites.net/`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:'here',
      messages: [],
      clientId: '',
      callWindow: '',
      callModal: '',
      callFrom: '',
      localSrc: null,
      peerSrc: null,


    };
    this.onMessageChange= this.onMessageChange.bind(this);
    this.addMessage= this.addMessage.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.pc = {};
    this.config = null;
    this.startCallHandler = this.startCall.bind(this);
    this.endCallHandler = this.endCall.bind(this);
    this.rejectCallHandler = this.rejectCall.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.onSubmitPay = this.onSubmitPay.bind(this);
    this.postData = this.postData.bind(this);

    var self = this;
    socket.on('RECEIVE_MESSAGE', function(data){
      console.log('RECEIVE_MESSAGE', data)
      self.addMessage(data);
      if(!self.state.showTimer){
        self.startTimer();
      }
    })
      .on('init', data => this.setState({ clientId: data.id }))
      .on('request', data => this.setState({ callModal: 'active', callFrom: data.from }))
      .on('call', (data) => {
        if (data.sdp) {
          this.pc.setRemoteDescription(data.sdp);
          if (data.sdp.type === 'offer') this.pc.createAnswer();
        } else this.pc.addIceCandidate(data.candidate);

        if(!self.state.showTimer){
          self.startTimer();
        }
      })
      .on('end', this.endCall.bind(this, false))
      .emit('init');
  }
  componentDidMount() {
    // subscribeToTimer((err, timestamp) => this.setState({
    //    timestamp
    //  }));
  }


    startCall(isCaller, friendID, config) {
      this.config = config;
      this.pc = new PeerConnection(friendID)
        .on('localStream', (src) => {
          const newState = { callWindow: 'active', localSrc: src };
          if (!isCaller) newState.callModal = '';
          this.setState(newState);
        })
        .on('peerStream', src => this.setState({ peerSrc: src }))
        .start(isCaller, config);
    }

    rejectCall() {
      socket.emit('end', { to: this.state.callFrom });
      this.setState({ callModal: '' });
    }

    endCall(isStarter) {
      if (_.isFunction(this.pc.stop)) this.pc.stop(isStarter);
      this.pc = {};
      this.config = null;
      this.setState({
        callWindow: '',
        localSrc: null,
        peerSrc: null
      });
    }
  addMessage = data => {
    console.log(data);
    this.setState({messages: [...this.state.messages, data]});
    console.log(this.state.messages);
  }
  onMessageChange(e){
    this.setState({message: e.target.value});

  }
  onSubmit(){

    socket.emit('SEND_MESSAGE', {
      message:  this.state.message,
      sendBy: this.state.clientId,
      timestamp: new Date(),
    })
  }


  onSubmitPay(){
    if(this.state.clientId === 'patient'){
      const publicKeyPatient = keys[this.state.clientId];
      const publicKeyphysician = keys[this.state.callFrom];
      this.postData(apiUrl + 'api/TransactionHeaders', {
        "physicianKey": publicKeyphysician,
        "patientKey": publicKeyPatient,
        "timeElapsed": new Date() - this.state.startTime,
        "transactionDate": new Date()
      })
        .then(data =>{ console.log(JSON.stringify(data)); return JSON.stringify(data);})
        .then(data=> this.setState({showTimer: false}))
        .catch(error => console.error(error));

    }
  }


  postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
  }

  startTimer(){
    console.log("showTimer")

    this.setState({showTimer: true, startTime: new Date()})
  }
  render() {
    const isPatient = this.state.clientId === 'patient';
    console.log(isPatient, this.state.clientId)
    return (
      <div className="App">
        <div  className="App">

        <Grid celled='internally'  className="App">
          <Grid.Row>
            <Grid.Column width={3}>
            <Card>
               <Card.Content header='About you' />
               <Card.Content>
                You're a
                <Label as='a' className='txt_label'>{this.state.clientId}</Label>

               </Card.Content>
               <Card.Content extra>
                 <Icon name='user' />
                 Visit 4 times
               </Card.Content>
             </Card>
             <Card>
                <Card.Content header={'Current Session'} />
                {this.state.showTimer&& <Timer

                />}


                {isPatient &&<Card.Content>
                   <QRCode value={this.state.callFrom} />
                   <Divider horizontal>Or</Divider>

                  <Button icon labelPosition='left'  color='green' onClick={this.onSubmitPay}>
                    Pay Now
                  <Icon name='money' />
                  </Button>
                </Card.Content>
                }

              </Card>

            </Grid.Column>
            <Grid.Column width={8}>
            {isPatient && <MainWindow
              clientId={this.state.clientId}
              startCall={this.startCallHandler}
            />}
            {!this.state.callFrom && !isPatient &&
              <Message
                 success
                 header="You don't have a patient right now. Please wait."
                 content='We will show the prompt as soon as we found the match'
               />

            }
            {this.state.callWindow === 'active' && <CallWindow
              status={this.state.callWindow}
              localSrc={this.state.localSrc}
              peerSrc={this.state.peerSrc}
              config={this.config}
              mediaDevice={this.pc.mediaDevice}
              endCall={this.endCallHandler}
            />}
            {this.state.callFrom && this.state.callModal === 'active' &&
              <CallModal
                status={this.state.callModal}
                startCall={this.startCallHandler}
                rejectCall={this.rejectCallHandler}
                callFrom={this.state.callFrom}
              />
            }


            </Grid.Column>
            <Grid.Column width={5}>
            <ChatWindow
            clientId={this.state.clientId}
            messages={this.state.messages}
            onMessageChange={this.onMessageChange}
            onSubmit={this.onSubmit}

            />
            </Grid.Column>
          </Grid.Row>

        </Grid>


        </div>
      </div>
    );
  }
}

export default App;
