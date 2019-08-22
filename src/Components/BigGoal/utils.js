const showComponent = (func, e) => {
    const targetEl = e.target.textContent;
    func({
        create: false,
        delete: false,
        import: false,
        export: false,
        use: false,
        [targetEl]: true
    });
};

const countTotalRuntime = goal => {
    return goal.tasks.reduce((acc, cur) => +acc + +cur.runtime, 0);
};

const textForCreate = [
    'Create empty Big Goal with naming and description',
    'Attach tasks to this Big Goal in Goal`s section',
    'Achieve your dream'
];
const textForImport = [
    'This section contains all community Big Goals.',
    'You can take one or more goals for yourself and realize them',
    'Double-click the Big Goal you need and then click button "import Big Goal'
];
const textForExport = [
    'In this section you can share your Big Goals with the community.',
    'Double-click the Big Goal you need and then click button "export Big Goal',
    'Share your success and it will return to you'
];
const textForUse = [
    'In this section you can choose Big Goals that will perform',
    'Double-click the Big Goal you need and then click button "use Big Goal',
    'All tasks from the Big Goal will be transferred to your personal task`s calendar.',
    'Performing one task after another, you will achieve the desired'
];
const textForDelete = [
    'In this section you can delete your unnecessary or obsolete Big Goals',
    'Double-click the Big Goal you need and then click button "delete Big Goal',
    'You can delete one or several goals at once'
];

export {
    showComponent,
    countTotalRuntime,
    textForImport,
    textForExport,
    textForUse,
    textForDelete,
    textForCreate
};