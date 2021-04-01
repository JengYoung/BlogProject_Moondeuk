function createActionTypes (rootType, customType = ['_SUCCESS','_FAILURE']) {
    return customType.map(type => rootType + type);
}

export default createActionTypes;
