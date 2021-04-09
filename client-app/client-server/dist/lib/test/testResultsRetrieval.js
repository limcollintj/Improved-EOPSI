"use strict";
const ResultsRetrievalUtil = require('../Util/ResultsRetrieval/ResultsRetrievalUtil');
const assert = require('assert');
const testResultsRetrieval = () => {
    const getCloudConfig = () => {
        const NUMBER_OF_BINS = 3;
        const MAXIMUM_LOAD = 3;
        const LARGE_PRIME_NUMBER = 1044444166666668888888889999999999n;
        const SMALL_PRIME_NUMBER = 6435409832617n;
        const vectorX = [];
        for (let i = 1; i <= 2 * MAXIMUM_LOAD + 1; i++) {
            vectorX.push(BigInt(i));
        }
        return { NUMBER_OF_BINS, MAXIMUM_LOAD, LARGE_PRIME_NUMBER, SMALL_PRIME_NUMBER, vectorX };
    };
    const { NUMBER_OF_BINS, MAXIMUM_LOAD, LARGE_PRIME_NUMBER, SMALL_PRIME_NUMBER, vectorX } = getCloudConfig();
    const blindingFactors = [
        [
            476753868570n,
            1584228586186n,
            3196673600356n,
            5656754687059n,
            6422899571875n,
            2714518430849n,
            2238655881126n
        ],
        [
            4260068400125n,
            1827116174331n,
            1357227946431n,
            5508478999199n,
            3478603027102n,
            4078011001326n,
            5848415118420n
        ],
        [
            2184498897325n,
            4587696078822n,
            2038902186053n,
            1839187885528n,
            5457614043223n,
            2864437937694n,
            6098285042791n
        ]
    ];
    const { qPrimeMatrix, qPrimePrimeMatrix } = {
        qPrimePrimeMatrix: [
            [
                702294960220853268270390758640315n,
                769932546360594328665195469456047n,
                711091466441629816539932750681352n,
                479096140266233485317062732199606n,
                130265147988379226585708316732371n,
                867961073348812727969944460721288n,
                994482557898202443263422091611939n
            ],
            [
                646510159584181179242296301792056n,
                681367210537458008664414676316051n,
                489282315293504205498730235859229n,
                347617453811737950815739880335006n,
                695409377839185453339690400381458n,
                469057653817639248142777361363754n,
                184824834822100131219367931213196n
            ],
            [
                763649220253327311726056762406857n,
                372924356054146136176199676113301n,
                268852975750268021967946757265272n,
                811600365414888595597869857141937n,
                645383243058684275467190765836932n,
                491138064557536585124678300803076n,
                511933318094857928880815405159480n
            ]
        ],
        qPrimeMatrix: [
            [
                145241337371497766430911477187721n,
                718991890416880027306762359300798n,
                988984346617827818409900744691848n,
                909743821335879044821995267397203n,
                625794081904929333940144329671820n,
                125462934318984906089797455095999n,
                89730939181836351623378762253908n
            ],
            [
                770722151580981085785162452974741n,
                959199280849193572449194248881250n,
                348933109749333550831301075338268n,
                575148137709352902185277153724372n,
                1029569016973033407320654326199671n,
                531416032420366594844133310804400n,
                586842019209063772945737124634416n
            ],
            [
                38434489746762029631760639044704n,
                496548214038336896815395679607094n,
                348670722727440004621637657846733n,
                1021162892438050611575629189088770n,
                804903117960799936362718888868830n,
                871598277717547009609362982517661n,
                960591973295095606072442603285559n
            ]
        ]
    };
    const hashedAttributes = [95917348524570763086840225464814582534913519306n];
    const realAnswerArray = ResultsRetrievalUtil.resultsRetrieval(SMALL_PRIME_NUMBER, LARGE_PRIME_NUMBER, MAXIMUM_LOAD, NUMBER_OF_BINS, vectorX, blindingFactors, hashedAttributes, qPrimeMatrix, qPrimePrimeMatrix);
    assert(realAnswerArray, ['95917348524570763086840225464814582534913519306']);
    console.log('Test passed');
};
testResultsRetrieval();
