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
  duration: number; // Number of days for the event
  startDate: Date;
    periodName :string | null; // Season/period start
  endDate: Date; // Season/period end
  createdAt: Date;
  expiresAt?: Date | null;
  
  // Relations (optional when querying)
  participants?: Participant[];
  adjustmentRequests?: AdjustmentRequest[];
}

export interface Participant {
  id: string;
  name: string;
  passwordHash: string;
  eventId: string;
  note?: string | null;
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
  confidence: AvailabilityConfidence;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  
  // Relations (optional when querying)
  participant?: Participant;
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