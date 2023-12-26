// Service is regular TS class, no need to annotate
export class LoggingService {

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
  
}