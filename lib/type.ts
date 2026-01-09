// Enums
export enum AvailabilityConfidence {
  DEFINITE = "DEFINITE",
  FLEXIBLE = "FLEXIBLE",
  MAYBE = "MAYBE",
}

export enum AdjustmentResponse {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
}

// Models
export interface Event {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  organizerName: string;
  passwordHash: string;
  periodName?: string | null;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  expiresAt?: Date | null;
  
  // Relations (optional when querying)
  subEvents?: SubEvent[];
  participants?: Participant[];
  adjustmentRequests?: AdjustmentRequest[];
}

export interface SubEvent {
  id: string;
  eventId: string;
  name: string;
  duration: number;
  order: number;
  
  // Relations (optional when querying)
  event?: Event;
  availabilities?: Availability[];
}

export interface Participant {
  id: string;
  name: string;
  passwordHash: string;
  eventId: string;
  note?: string | null; // Made optional to match schema
  createdAt: Date;

  // Relations (optional when querying)
  event?: Event;
  availabilities?: Availability[];
  adjustmentTarget?: AdjustmentTarget[];
  adjustmentRequests?: AdjustmentRequest[];
}

export interface Availability {
  id: string;
  participantId: string;
  subEventId: string; // Added - was missing!
  confidence: AvailabilityConfidence;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  
  // Relations (optional when querying)
  participant?: Participant;
  subEvent?: SubEvent;
}

export interface Feedback {
  id: string;
  message: string;
  email?: string | null;
  createdAt: Date;
}

export interface AdjustmentRequest {
  id: string;
  eventId: string;
  requesterId: string;
  startTime: Date;
  endTime: Date;
  note?: string | null;
  createdAt: Date;
  resolvedAt?: Date | null;

  // Relations (optional when querying)
  event?: Event;
  requester?: Participant;
  targets?: AdjustmentTarget[];
}

export interface AdjustmentTarget {
  id: string;
  adjustmentRequestId: string;
  participantId: string;
  response: AdjustmentResponse;
  respondedAt?: Date | null;
  
  // Relations (optional when querying)
  adjustmentRequest?: AdjustmentRequest;
  participant?: Participant;
}