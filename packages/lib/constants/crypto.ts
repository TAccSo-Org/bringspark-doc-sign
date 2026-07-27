import { env } from '../utils/env';

export const BRINGSPARK_ENCRYPTION_KEY = env('NEXT_PRIVATE_ENCRYPTION_KEY');

export const BRINGSPARK_ENCRYPTION_SECONDARY_KEY = env('NEXT_PRIVATE_ENCRYPTION_SECONDARY_KEY');

// if (typeof window === 'undefined') {
//   if (!BRINGSPARK_ENCRYPTION_KEY || !BRINGSPARK_ENCRYPTION_SECONDARY_KEY) {
//     throw new Error('Missing BRINGSPARK_ENCRYPTION_KEY or BRINGSPARK_ENCRYPTION_SECONDARY_KEY keys');
//   }

//   if (BRINGSPARK_ENCRYPTION_KEY === BRINGSPARK_ENCRYPTION_SECONDARY_KEY) {
//     throw new Error(
//       'BRINGSPARK_ENCRYPTION_KEY and BRINGSPARK_ENCRYPTION_SECONDARY_KEY cannot be equal',
//     );
//   }
// }

// if (BRINGSPARK_ENCRYPTION_KEY === 'CAFEBABE') {
//   console.warn('*********************************************************************');
//   console.warn('*');
//   console.warn('*');
//   console.warn('Please change the encryption key from the default value of "CAFEBABE"');
//   console.warn('*');
//   console.warn('*');
//   console.warn('*********************************************************************');
// }
