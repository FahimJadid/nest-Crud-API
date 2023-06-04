import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  FirstName: string;

  @Prop()
  SurName: string;

  @Prop()
  Designation: string;

  @Prop()
  Email: string;

  @Prop()
  Address: String;

  @Prop()
  Salary: string;

  @Prop()
  Gender: String;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
