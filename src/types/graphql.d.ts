declare module '*.graphql' {
    import { DocumentNode } from 'graphql';
    const Schema: DocumentNode;
  
    export default Schema;
  }
  
  export type Appointment = {
    id: number;
    startTime: string;
    endTime: string;
    patient: Patient;
    psychologist: Psychologist;
  };
  
  export type Patient = {
    id: number;
    name: string;
  };
  
  export type Psychologist = {
    id: number;
    name: string;
  };
  