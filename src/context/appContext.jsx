import {io} from 'socket.io-client';
import React from 'react';
const SOCKET_URL = "https://backend-chat-5lcr.onrender.com";

export const socket = io(SOCKET_URL);

export const AppContext = React.createContext();