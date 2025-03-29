export const dummyData = {
    pmuTree: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, name: `PMU Node ${i + 1}` })),
    moiTree: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, name: `MOI Node ${i + 1}` })),
    kpiTree: Array.from({ length: 200 }, (_, i) => ({ id: i + 1, name: `KPI Node ${i + 1}` })),
};


export const ITEMS_PER_PAGE = 20;