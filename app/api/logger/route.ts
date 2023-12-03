import * as winston from 'winston'
import { ecsFormat } from '@elastic/ecs-winston-format'

const logger = winston.createLogger({
  format: ecsFormat(), 
  transports: [
    new winston.transports.Console()
  ]
});

export async function GET(request: Request) {
  logger.info("success") 
 
  return Response.json({data: 'success'})
}