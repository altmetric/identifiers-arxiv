"use strict";

const arxiv = require("../lib/arxiv");

test("extracts pre-2007 arXiv IDs without a scheme", () => {
    expect(arxiv.extract("Example: math.GT/0309136")).toEqual(["math.GT/0309136"]);
});

test("extracts pre-2007 arXiv IDs with a scheme", () => {
    expect(arxiv.extract("arXiv:math.GT/0309136")).toEqual(["math.GT/0309136"]);
});

test("extracts post-2007 arXiv IDs without a scheme", () => {
    expect(arxiv.extract("Example: 0706.0001")).toEqual(["0706.0001"]);
});

test("extracts post-2007 arXiv IDs with a version", () => {
    expect(arxiv.extract("Example: 1501.00001v2")).toEqual(["1501.00001v2"]);
});

test("extracts post-2007 arXiv IDs with a scheme", () => {
    expect(arxiv.extract("Example: arXiv:0706.0001")).toEqual(["0706.0001"]);
});

test("extracts both pre- and post-2007 arXiv IDs", () => {
    expect(arxiv.extract("math.GT/0309136\narXiv:1501.00001v2")).toEqual(["math.GT/0309136", "1501.00001v2"]);
});

test("does not extract IDs from the end of DOIs", () => {
    expect(arxiv.extract("10.1049/el.2013.3006")).toEqual([]);
});

test("does not extract IDs from the middle of DOIs", () => {
    expect(arxiv.extract("10.2310/7290.2014.00033")).toEqual([]);
});

test("returns an empty array if there are no arXiv IDs", () => {
    expect(arxiv.extract("No IDs here")).toEqual([]);
});
