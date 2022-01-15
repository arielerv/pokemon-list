const buildRows = (rows, columns) => rows.map((row) => {
    const currentRow = { key: row.key, $bsStyle: row.$bsStyle };

    row.values.forEach((value, index) => {
        const { key: columnKey } = columns[index];
        currentRow[columnKey] = value;
    });

    return currentRow;
});

export default buildRows;
