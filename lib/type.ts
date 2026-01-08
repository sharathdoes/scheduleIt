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
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  expiresAt?: Date | null;

  participants?: Participant[];
  adjustmentRequests?: AdjustmentRequest[];
}

export interface Participant {
  id: string;
  name: string;
  passwordHash: string;
  eventId: string;
  note: string;
  createdAt: Date;

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

  targets?: AdjustmentTarget[];
}

export interface AdjustmentTarget {
  id: string;
  adjustmentRequestId: string;
  participantId: string;
  response: AdjustmentResponse;
  respondedAt?: Date | null;
}
