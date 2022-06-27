export default function EmpReducer(state=[],action)
{
    switch(action.type)
    {
        case 'EmpAction':
            return action.payload; 

            default:
                return state
    }
}