
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LoginInfo {
    textMessage : string
    textValue  : string

    constructor(msg, val) {
        this.textMessage = msg
        this.textValue = val
    }
}