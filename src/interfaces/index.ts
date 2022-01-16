export interface cidade {
  id: number;
  cidade: string;
  postos: posto[];
}

export interface posto {
  id: number;
  reservatorio: number;
  coords: {
    latitude: number;
    longitude: number;
  };
  created_at: Date;
  update_at: Date;
}

export interface userLocation {
  latitude: number;
  longitude: number;
}
