import { HttpStatus } from '@nestjs/common';
import { BaseException } from './httpexceptions';

export class ObjectNotFoundException extends BaseException {
  constructor(name: string, id?: number) {
    super(HttpStatus.NOT_FOUND, {
      message: `${name} Not Found`,
      name: `${name.toLocaleUpperCase()}_NOT_FOUND`,
      developerMessage: `${name} not found by ID [${id}]`,
    });
  }
}