"use strict";

function extract(str) {
    return extractPre2007Ids(str).concat(extractPost2007Ids(str));
}

function extractPre2007Ids(str) {
    return extractIds(str, /(?:^|\s|\/)((?:arXiv:)?[a-z-]+(?:\.[A-Z]{2})?\/\d{2}(?:0[1-9]|1[012])\d{3}(?:v\d+)?(?=$|\s))/gi);
}

function extractPost2007Ids(str) {
    return extractIds(str, /(?:^|\s|\/)((?:arXiv:)?\d{4}\.\d{4,5}(?:v\d+)?(?=$|\s))/gi);
}

function extractIds(str, re) {
    let match = [];
    let matches = [];

    while ((match = re.exec(str)) !== null) {
        matches.push(match[1]);
    }

    return matches.map(stripScheme);
}

function stripScheme(str) {
    return str.replace(/^arXiv:/i, "");
}

exports.extract = extract;
