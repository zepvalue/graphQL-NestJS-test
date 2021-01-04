import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { UserService } from './user.service';

@WebSocketGateway()
export class UserGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  timer = null;
  seconds = 0;
  timeIn = new Date();
  timeOut = new Date();

  constructor(private readonly userService: UserService) {}

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('UserGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): void {
    this.server.emit('msgToClient', payload);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
    this.timeOut = new Date();

    this.userService.create({
      sessionID: client.id,
      seconds: this.seconds,
      timeIn: this.timeIn,
      timeOut: this.timeOut,
    });
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    this.timeIn = new Date();
    this.timer = setInterval(() => {
      this.seconds++;
    }, 1000);
  }
}
