import { redirect } from 'next/navigation';

// La historia ahora vive en la página "Nosotros"
export default function HistoriaIndex() {
  redirect('/nosotros');
}
