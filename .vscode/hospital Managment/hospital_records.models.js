import mongoose from 'mongoose';

const hospitalRecordsSchema = new mongoose.Schema({





  
}, { timestamps: ture });

export const hospitalRecord = mongoose.model(
  'hospitalRecord',
  hospitalRecordsSchema
);
