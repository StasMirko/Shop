import {Document, Model, model, Schema} from 'mongoose';
import {IUser} from '../../models';
import {TableNamesEnum} from '../../constants';

export type UserType = IUser & Document

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const UserSchema: Schema = new Schema<IUser>({

},{
  timestamps: true
});

export const UserModel: Model<UserType> = model<UserType>(TableNamesEnum.USER, UserSchema);
