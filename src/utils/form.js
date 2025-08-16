export const singupReducer = (formData, action )=>{
    switch(action.type){
        case 'username' :{
            return{...formData, username : action.value }
        }
        case 'password' : {
            return{...formData, password : action.value }
        }
        case 'confirmPassword' : {
            return{...formData, confirmPassword : action.value }
        }
        case 'reset' :{
            return {
                username : '',
                password : '',
                confirmPassword : ''
            }
        }
        default : 
            return formData;
    }
}


export const loginReducer = (formData, action )=>{
    switch(action.type){
        case 'username' :{
            return{...formData, username : action.value }
        }
        case 'password' : {
            return{...formData, password : action.value }
        }
        case 'reset' :{
            return {
                username : '',
                password : '',
            }
        }
        default : 
            return formData;
    }
}


export const setError = (error,value,errorMessage)=>{
    return{
        ...error,
        error : value,
        message : errorMessage
    }
}

export const firebaseErrorMessages = {
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/email-already-in-use': 'This email is already registered. Try logging in.',
  'auth/weak-password': 'Password is too weak. Use at least 6 characters.',
  'auth/user-not-found': 'No account found with this email.',
  'auth/wrong-password': 'Incorrect password. Please try again.'
};
