const fileWriter = require('fs')

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const addObjectToTable = async (table, object) => {
    fileWriter.appendFileSync(`${table}.data`, `${JSON.stringify(object)}\n`);
    return
};

const readTable = async (table) => {
    const tableResultBuffer = await fileWriter.readFileSync(`${table}.data`);
    const tableResultString = tableResultBuffer.toString();
    const tableResultArray = tableResultString.split('\n');
    const tableResult = [];

    tableResultArray.forEach( (tableRow) => {
        if (IsJsonString(tableRow)) {
            tableResult.push(JSON.parse(tableRow));
        }
    });

    return tableResult
};

module.exports = {
    addObjectToTable,
    readTable
};
