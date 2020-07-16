module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    collectCoverageFrom: ["../src/"],
    moduleFileExtensions: ["ts", "js", "json"]
};