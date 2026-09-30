const PASTA = '/do-wix/parceiros/';

const GOOGLE = { src: PASTA + 'google.png', nome: 'Google Patents' };
const UNIRV = { src: PASTA + 'unirv.png', nome: 'UNIRV' };
const META = { src: PASTA + 'meta.png', nome: 'Meta' };
const MICROSOFT = { src: PASTA + 'microsoft.png', nome: 'Microsoft' };
const RD_STATION = { src: PASTA + 'rd-station.png', nome: 'RD Station' };
const BNI = { src: PASTA + 'bni.png', nome: 'BNI Metropolitano' };
const UNIRV_VERTICAL = { src: PASTA + 'unirv-vertical.jpg', nome: 'UniRV — Universidade de Rio Verde' };
const SEBRAE = { src: PASTA + 'sebrae.png', nome: 'Sebrae' };

// Mesma sequência (com repetições) do slider original do Wix
const COMPLETA = [GOOGLE, UNIRV, META, MICROSOFT, RD_STATION, BNI, UNIRV_VERTICAL, SEBRAE];
const SEM_UNIRV_E_SEBRAE = [GOOGLE, META, MICROSOFT, RD_STATION, BNI, UNIRV_VERTICAL];

export const PARCEIROS = [...COMPLETA, ...SEM_UNIRV_E_SEBRAE, ...COMPLETA, ...SEM_UNIRV_E_SEBRAE];
