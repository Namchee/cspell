'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('./.pnp.cjs').setup();

/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = {
    description: 'Make cspell Yarn 2 PNP aware',
    import: ['@cspell/dict-medicalterms/cspell-ext.json'],
};

module.exports = cspell;
