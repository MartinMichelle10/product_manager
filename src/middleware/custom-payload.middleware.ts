// // custom-payload.middleware.ts

// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';

// @Injectable()
// export class CustomPayloadMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     // Add custom payload to the response
//     res.customPayload = {
//       message: 'This is a custom payload!',
//     };

//     next();
//   }
// }
