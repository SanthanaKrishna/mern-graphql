


const limitMaxValue = (value, maxlen) => {
  if (!value) {
    return '';
  }
  return value.slice(0, maxlen);
}


//allow only number restrict to type alphabets and special characters
const allowOnlyNumber = (ev) => {
  if (!ev) {
    return '';
  }
  return ev.replace(/[^\d]/g, '');
};

const nameValidate = (values, err) => {
  let errors = null;
  const name = values ? values.trim() : '';
  if (!name) {
    errors = err.RequiredError;
  }
  return errors;
};

//remove space bettween words
const removeSpace = (value) => {
  let data = ''
  if (value !== '') {
    data = value.replace(/\s\s+/g, ' ').trim();
  }
  return data;
};
//Email validate to check if the email field has value or not and to check the regEx for Email
const emailValidate = (values, Errors) => {
  let errors = null;
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // const pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const email = values ? values.trim() : '';
  if (!email) {
    errors = Errors.requiredError.emailId;
  } else if (!regEx.test(email)) {
    errors = Errors.invalidError.emailId;
  }
  return errors;
};

//check email and confirm email is equal or not
const CheckEmail = (values, Errors) => {
  let errors = null;
  const email = removeSpace(values.emailId)
  const confirmEmail = removeSpace(values.confirmEmail)
  if (!values.confirmEmail) {
    errors = Errors.RequiredError;
  } else if ((email.toLowerCase() !== confirmEmail.toLowerCase())) {
    errors = Errors.InvalidError;
  }
  return errors;
};


// /**
//  * validation to check if the phone no is empty or not
//  * @param {*} values
//  */
const phoneNumberValidate = (values, Errors) => {
  let errors;
  const phone = values ? values.trim() : '';
  if (!phone) {
    errors = Errors.RequiredError;
  } else if (phone.length < 12 || phone.startsWith('0')) {
    errors = Errors.InvalidError || Errors;
  }
  return errors;
};

// /**
//  * validation to check if the Name no is empty or not
//  * @param {*} values
//  */
// const NameValidate = (values, Errors) => {
//   let errors = null;
//   const Name = values ? values.trim() : '';
//   if (!Name || Name == '') {
//     errors = Errors.InvalidError;
//     // tslint:disable-next-line:max-line-length
//   } else if (!Name.match(/^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
//     errors = Errors.RequiredError;
//   }
//   return errors;
// };
// /**
//  * validation to check if the address is empty or not
//  * @param {*} values
//  */
// const addressValidate = (values, Errors) => {
//   let errors = null;
//   if (!values) {
//     errors = Errors.RequiredError;
//   }
//   return errors;
// };



// /**
//  * Message Validate to check if the message field is mepty or not
//  * @param {*} values
//  */
// const messageValidate = (values) => {
//   let errors;
//   const msg = values ? values.trim() : '';
//   if (!msg) {
//     errors = 'Please enter your message.';
//   }
//   return errors;
// };

// /**
//  * allow only alphabets to restrict the user to type numbers and special characters
//  * @param {*} ev
//  */
// const allowOnlyAlphabets = (ev) => {
//   if (!ev) {
//     return '';
//   }
//   return ev.toString().replace(/[^a-zA-Z ]/g, '');
// };
// /**
//  * to format the eg: 1111111111 to 111-111-1111
//  * @param {*} ev
//  */
// const formatPhoneNumber = (value) => {
//   let data = '';
//   if (value) {
//     // value.replace(/[-\/\ /]/g, '');
//     let str = value.replace(/\D/g, '');
//     str = (/(\d{0,10})/g).exec(str.replace(/[^\d.]/g, ''));
//     const formatPhoneNo = str[0].match(/^(\d{3})(\d{3})(\d{4})$/);
//     data = (!formatPhoneNo) ? str[0] : `${formatPhoneNo[1]}-${formatPhoneNo[2]}-${formatPhoneNo[3]}`;
//   }
//   return data;
// };




// const changeFormatPhone = (ev) => {
//   let str = ev.replace(/\D/g, '');
//   // Trim the remaining input to ten characters, to preserve phone number format
//   str = str.substring(0, 12);
//   // Based upon the length of the string, we add formatting as necessary
//   var size = str.length;
//   let result = '';
//   if (size == 0 || size < 4) {
//     result = str;
//   } else if (size < 7) {
//     result = str.substring(0, 3) + '-' + str.substring(3, 6);
//   } else {
//     result = str.substring(0, 3) + '-' + str.substring(3, 6) + '-' + str.substring(6, 12);
//   }
//   return result;
// }



// const sanitize = (input) => {
//   var output = '';
//   if (input) {
//     output = input.replace(/<script[^>]*?>.*?<\/script>/gi, '').
//       replace(/<[\/\!]*?[^<>]*?>/gi, '').
//       replace(/<style[^>]*?>.*?<\/style>/gi, '').
//       replace(/<![\s\S]*?--[ \t\n\r]*>/gi, '');

//   }
//   return output;
// };

// const decodeString = (input) => {
//   var output = '';
//   if (input) {
//     output = input.replace(/&amp;/g, '&');
//   }
//   return output;
// }

// const ascending = (key) =>
//   (a, b) => {
//     let AValue = a[key];
//     let BValue = b[key];
//     if (typeof AValue === 'string') {
//       AValue = AValue.toString().toLowerCase();
//     }
//     if (typeof BValue === 'string') {
//       BValue = BValue.toString().toLowerCase();
//     }
//     if (AValue === null) return 1;
//     else if (BValue === null) return -1;
//     else if (AValue < BValue) return -1;
//     else if (AValue > BValue) return 1;
//     return 0;
//   };

// const descending = (key) =>
//   (a, b) => {
//     let AValue = a[key];
//     let BValue = b[key];
//     if (typeof AValue === 'string') {
//       AValue = AValue.toString().toLowerCase();
//     }
//     if (typeof BValue === 'string') {
//       BValue = BValue.toString().toLowerCase();
//     }
//     if (AValue === null) return 1;
//     else if (BValue === null) return -1;
//     else if (AValue < BValue) return 1;
//     else if (AValue > BValue) return -1;
//     return 0;
//   };
// const checkIsMobile = () => {
//   let isMobile, orientationType;
//   if (typeof navigator !== undefined) {
//     isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     orientationType = (typeof window.orientation !== undefined) ? window.orientation == 90 ? 'landscape' : 'portrait' : null;
//     if (/iPad/i.test(navigator.userAgent) && orientationType === 'landscape') {
//       isMobile = false;
//     }
//     console.log("789897589347598347958347", isMobile);
//   }
//   return isMobile;
// }


export default {
  limitMaxValue,
  allowOnlyNumber,
  emailValidate,
  CheckEmail,
  nameValidate,
  phoneNumberValidate
}