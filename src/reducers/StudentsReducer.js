export default function StudentsReducer(state=[],action)
{
    switch(action.type)
    {
        case 'StudentsAction':
            return action.payload; 

            default:
                return state
    }
}