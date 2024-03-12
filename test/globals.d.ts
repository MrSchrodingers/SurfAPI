// Module Augmentation
declare global {
  var testRequest: import('supertest').SuperTest<import('supertest').Test>;
}

export {}; // Make this a module

// Os imports devem ser inline para que o TS reconheça e sobrescreva os tipos
// global. Caso seja feito de outro modo o TS reconhece como tipo local.
// Ref: https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts/51114250#51114250
