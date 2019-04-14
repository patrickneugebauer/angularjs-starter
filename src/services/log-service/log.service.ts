export class LogService {
  static $inject = [];
  static displayName = 'logService';
  log(...xs) {
    console.log(...xs);
  }
};
