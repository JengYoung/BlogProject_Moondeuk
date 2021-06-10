function createActionTypes (rootType, customType = ['_SUCCESS','_FAILURE']) {
    console.log(customType.map(type => rootType + type))
    return customType.map(type => rootType + type);
}

export default createActionTypes;
