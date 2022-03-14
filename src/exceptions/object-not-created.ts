import { HttpStatus } from '@nestjs/common';
import { BaseException } from './httpexceptions';

export class ObjectNotCreatedException extends BaseException {
  constructor(name: string, id?: number) {
    super(HttpStatus.NOT_ACCEPTABLE, {
      message: `${name} Not Created`,
      name: `${name.toLocaleUpperCase()}_NOT_CREATED`,
      developerMessage: `${name} not found by ID [${id}]`,
    });
  }
}