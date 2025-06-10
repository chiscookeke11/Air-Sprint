



export interface PackageDataProp {
  tracking_id: string;
  id: string;
  sender_uid: string;
  sender_email: string;
  recipient_email: string;
  status: string;
  current_lat: number;
  current_lng: number;
  destination_lat: number;
  destination_lng: number;
  created_at: Date;
  recipient_name: string;
  sender_name: string;
  recipient_number: string;
  sender_number: string;
  recipient_address: string;
}
