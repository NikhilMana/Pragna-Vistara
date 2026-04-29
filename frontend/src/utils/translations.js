export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English', htmlLang: 'en' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', htmlLang: 'hi' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', htmlLang: 'kn' },
]

export const translations = {
  en: {
    ui: {
      select_level: 'Select your class level',
      select_subject: 'Select subject',
      select_topic: 'Select topic',
      enter_answer: 'Enter your answer',
      speak: 'Speak your answer',
      submit: 'Check my understanding',
      misconception_label: 'What we found',
      explanation_label: 'Here is the correction',
      visual_label: 'Visual explanation',
      suggestion_label: 'What to do next',
    },
    misconception_types: {
      partial_understanding: 'Partial Understanding',
      wrong_concept: 'Wrong Concept',
      conceptual_error: 'Conceptual Error',
      formula_misuse: 'Formula Misuse',
      step_error: 'Step Error',
      derivation_error: 'Derivation Error',
      no_misconception: 'Correct!',
    },
    suggestions: {
      retry: 'Try again with this hint',
      peer_learning: 'Discuss with a classmate',
      teacher_flag: 'Ask your teacher',
      advance: 'Great! Move to next topic',
    },
  },
  hi: {
    ui: {
      select_level: 'अपनी कक्षा का स्तर चुनें',
      select_subject: 'विषय चुनें',
      select_topic: 'टॉपिक चुनें',
      enter_answer: 'अपना उत्तर दर्ज करें',
      speak: 'अपना उत्तर बोलें',
      submit: 'मेरी समझ जांचें',
      misconception_label: 'हमें क्या मिला',
      explanation_label: 'यह सुधार है',
      visual_label: 'दृश्य व्याख्या',
      suggestion_label: 'आगे क्या करना है',
    },
    misconception_types: {
      partial_understanding: 'आंशिक समझ',
      wrong_concept: 'गलत अवधारणा',
      conceptual_error: 'अवधारणात्मक त्रुटि',
      formula_misuse: 'सूत्र का गलत उपयोग',
      step_error: 'चरण की त्रुटि',
      derivation_error: 'व्युत्पत्ति की त्रुटि',
      no_misconception: 'सही!',
    },
    suggestions: {
      retry: 'इस संकेत के साथ फिर प्रयास करें',
      peer_learning: 'किसी सहपाठी से चर्चा करें',
      teacher_flag: 'अपने शिक्षक से पूछें',
      advance: 'बहुत बढ़िया! अगले टॉपिक पर जाएं',
    },
  },
  kn: {
    ui: {
      select_level: 'ನಿಮ್ಮ ತರಗತಿಯ ಮಟ್ಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      select_subject: 'ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      select_topic: 'ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      enter_answer: 'ನಿಮ್ಮ ಉತ್ತರವನ್ನು ನಮೂದಿಸಿ',
      speak: 'ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಹೇಳಿ',
      submit: 'ನನ್ನ ತಿಳುವಳಿಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ',
      misconception_label: 'ನಾವು ಕಂಡುಕೊಂಡದ್ದು',
      explanation_label: 'ಇಲ್ಲಿದೆ ತಿದ್ದುಪಡಿ',
      visual_label: 'ದೃಶ್ಯ ವಿವರಣೆ',
      suggestion_label: 'ಮುಂದೆ ಏನು ಮಾಡಬೇಕು',
    },
    misconception_types: {
      partial_understanding: 'ಭಾಗಶಃ ತಿಳುವಳಿಕೆ',
      wrong_concept: 'ತಪ್ಪು ಪರಿಕಲ್ಪನೆ',
      conceptual_error: 'ಪರಿಕಲ್ಪನಾ ದೋಷ',
      formula_misuse: 'ಸೂತ್ರದ ತಪ್ಪು ಬಳಕೆ',
      step_error: 'ಹಂತದ ದೋಷ',
      derivation_error: 'ವ್ಯುತ್ಪನ್ನ ದೋಷ',
      no_misconception: 'ಸರಿಯಾಗಿದೆ!',
    },
    suggestions: {
      retry: 'ಈ ಸುಳಿವಿನೊಂದಿಗೆ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
      peer_learning: 'ಸಹಪಾಠಿಯೊಂದಿಗೆ ಚರ್ಚಿಸಿ',
      teacher_flag: 'ನಿಮ್ಮ ಶಿಕ್ಷಕರನ್ನು ಕೇಳಿ',
      advance: 'ಅದ್ಭುತ! ಮುಂದಿನ ವಿಷಯಕ್ಕೆ ಹೋಗಿ',
    },
  },
}

export const phraseTranslations = {
  hi: {
    'Pragna Vistara': 'प्रज्ञा विस्तार',
    Home: 'होम',
    Progress: 'प्रगति',
    Review: 'समीक्षा',
    Online: 'ऑनलाइन',
    Offline: 'ऑफलाइन',
    Syncing: 'सिंक हो रहा है',
    Logout: 'लॉग आउट',
    Language: 'भाषा',
    English: 'अंग्रेज़ी',
    Hindi: 'हिन्दी',
    Kannada: 'कन्नड़',
    Student: 'विद्यार्थी',
    Validator: 'सत्यापक',
    'Sign in to your learning platform': 'अपने सीखने के प्लेटफॉर्म में साइन इन करें',
    'Username or Email': 'यूज़रनेम या ईमेल',
    Password: 'पासवर्ड',
    'Forgot password?': 'पासवर्ड भूल गए?',
    'Login as Student': 'विद्यार्थी के रूप में लॉगिन करें',
    'Login as Validator': 'सत्यापक के रूप में लॉगिन करें',
    "Don't have an account?": 'खाता नहीं है?',
    'Sign up': 'साइन अप',
    'Please fill in all fields.': 'कृपया सभी फ़ील्ड भरें.',
    'Syllabus Curriculum': 'पाठ्यक्रम',
    'Pick a class to open its syllabus dashboard.': 'पाठ्यक्रम डैशबोर्ड खोलने के लिए कक्षा चुनें.',
    Board: 'बोर्ड',
    'State Board': 'राज्य बोर्ड',
    'The extracted dataset currently covers the State Board syllabus. Other boards can be added once their PDFs are processed.': 'वर्तमान डेटा सेट राज्य बोर्ड पाठ्यक्रम को कवर करता है. अन्य बोर्ड उनकी PDF प्रोसेस होने के बाद जोड़े जा सकते हैं.',
    Levels: 'स्तर',
    'Jump into a band of classes and compare coverage.': 'कक्षाओं के समूह में जाएं और कवरेज की तुलना करें.',
    Classes: 'कक्षाएं',
    'Select one class to open the full subject breakdown and chapter visuals.': 'पूरी विषय सूची और अध्याय दृश्य खोलने के लिए एक कक्षा चुनें.',
    'Open the selected class': 'चुनी हुई कक्षा खोलें',
    'View Subjects': 'विषय देखें',
    Subjects: 'विषय',
    'Choose a class first': 'पहले कक्षा चुनें',
    'The subject visuals need a class context before they can load.': 'विषय दृश्य लोड होने से पहले कक्षा की जानकारी चाहिए.',
    'Back to class dashboard': 'कक्षा डैशबोर्ड पर वापस जाएं',
    'Back to classes': 'कक्षाओं पर वापस जाएं',
    'Open any subject to inspect textbooks, workbooks, and chapter maps.': 'पाठ्यपुस्तकें, वर्कबुक और अध्याय मानचित्र देखने के लिए कोई विषय खोलें.',
    'Browse subjects': 'विषय ब्राउज़ करें',
    'Search by subject or textbook title.': 'विषय या पाठ्यपुस्तक शीर्षक से खोजें.',
    'Search subjects...': 'विषय खोजें...',
    Open: 'खोलें',
    Back: 'वापस',
    'Source textbook:': 'स्रोत पाठ्यपुस्तक:',
    'Enter your answer': 'अपना उत्तर दर्ज करें',
    'Type your thinking here...': 'अपनी सोच यहाँ लिखें...',
    'Speak your answer': 'अपना उत्तर बोलें',
    'Listening...': 'सुना जा रहा है...',
    characters: 'अक्षर',
    Hint: 'संकेत',
    'Hide hint': 'संकेत छिपाएं',
    'Saving...': 'सेव हो रहा है...',
    'Check my understanding': 'मेरी समझ जांचें',
    'Session Complete': 'सत्र पूरा हुआ',
    'What we found': 'हमें क्या मिला',
    Confidence: 'विश्वास',
    'Here is the correction': 'यह सुधार है',
    'What to do next': 'आगे क्या करना है',
    'Visual Explanation': 'दृश्य व्याख्या',
    'Conceptual Questions': 'वैचारिक प्रश्न',
    'Misconception Check': 'गलतफहमी की जांच',
    'Catalog Not Found': 'कैटलॉग नहीं मिला',
    'Back to Selection': 'चयन पर वापस जाएं',
    'All Chapters': 'सभी अध्याय',
    'Search chapters and topics...': 'अध्याय और विषय खोजें...',
    'Interactive animations, questions, and misconception probes': 'इंटरएक्टिव एनिमेशन, प्रश्न और गलतफहमी की जांच',
    'Topic not found': 'टॉपिक नहीं मिला',
    'The requested chapter or topic does not exist.': 'अनुरोधित अध्याय या विषय मौजूद नहीं है.',
    'Back to Chapters': 'अध्यायों पर वापस जाएं',
    'I understand, continue to questions': 'मैं समझता हूँ, प्रश्नों पर जारी रखें',
    'No questions available for this topic yet.': 'इस विषय के लिए अभी तक कोई प्रश्न उपलब्ध नहीं हैं.',
    'Continue to misconception check': 'गलतफहमी जांच पर जारी रखें',
    'Show hint': 'संकेत दिखाएं',
    'Concept Coverage': 'अवधारणा कवरेज',
    'Previous': 'पिछला',
    'Next question': 'अगला प्रश्न',
    'No misconception probes available for this topic yet.': 'इस विषय के लिए अभी तक कोई गलतफहमी जांच उपलब्ध नहीं है.',
    'These probes test for common misunderstandings. Choose carefully!': 'ये जांच आम गलतफहमियों का परीक्षण करती हैं. सावधानी से चुनें!',
    'Results Summary': 'परिणाम सारांश',
    'correct': 'सही',
    'Next': 'अगला',
    'Dismiss install prompt': 'इंस्टॉल संदेश बंद करें',
  },
  kn: {
    'Pragna Vistara': 'ಪ್ರಜ್ಞಾ ವಿಸ್ತಾರ',
    Home: 'ಮುಖಪುಟ',
    Progress: 'ಪ್ರಗತಿ',
    Review: 'ವಿಮರ್ಶೆ',
    Online: 'ಆನ್‌ಲೈನ್',
    Offline: 'ಆಫ್‌ಲೈನ್',
    Syncing: 'ಸಿಂಕ್ ಆಗುತ್ತಿದೆ',
    Logout: 'ಲಾಗ್ ಔಟ್',
    Language: 'ಭಾಷೆ',
    English: 'ಇಂಗ್ಲಿಷ್',
    Hindi: 'ಹಿಂದಿ',
    Kannada: 'ಕನ್ನಡ',
    Student: 'ವಿದ್ಯಾರ್ಥಿ',
    Validator: 'ಪರಿಶೀಲಕ',
    'Sign in to your learning platform': 'ನಿಮ್ಮ ಕಲಿಕಾ ವೇದಿಕೆಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ',
    'Username or Email': 'ಬಳಕೆದಾರ ಹೆಸರು ಅಥವಾ ಇಮೇಲ್',
    Password: 'ಪಾಸ್‌ವರ್ಡ್',
    'Forgot password?': 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?',
    'Login as Student': 'ವಿದ್ಯಾರ್ಥಿಯಾಗಿ ಲಾಗಿನ್ ಮಾಡಿ',
    'Login as Validator': 'ಪರಿಶೀಲಕರಾಗಿ ಲಾಗಿನ್ ಮಾಡಿ',
    "Don't have an account?": 'ಖಾತೆ ಇಲ್ಲವೇ?',
    'Sign up': 'ಸೈನ್ ಅಪ್',
    'Please fill in all fields.': 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ.',
    'Syllabus Curriculum': 'ಪಠ್ಯಕ್ರಮ',
    'Pick a class to open its syllabus dashboard.': 'ಪಠ್ಯಕ್ರಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಲು ತರಗತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
    Board: 'ಮಂಡಳಿ',
    'State Board': 'ರಾಜ್ಯ ಮಂಡಳಿ',
    'The extracted dataset currently covers the State Board syllabus. Other boards can be added once their PDFs are processed.': 'ಪ್ರಸ್ತುತ ಡೇಟಾಸೆಟ್ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮವನ್ನು ಒಳಗೊಂಡಿದೆ. ಇತರ ಮಂಡಳಿಗಳ PDF ಗಳು ಪ್ರಕ್ರಿಯೆಗೊಂಡ ನಂತರ ಅವನ್ನು ಸೇರಿಸಬಹುದು.',
    Levels: 'ಮಟ್ಟಗಳು',
    'Jump into a band of classes and compare coverage.': 'ತರಗತಿಗಳ ಗುಂಪಿಗೆ ಹೋಗಿ ವ್ಯಾಪ್ತಿಯನ್ನು ಹೋಲಿಸಿ.',
    Classes: 'ತರಗತಿಗಳು',
    'Select one class to open the full subject breakdown and chapter visuals.': 'ಪೂರ್ಣ ವಿಷಯ ವಿವರ ಮತ್ತು ಅಧ್ಯಾಯ ದೃಶ್ಯಗಳನ್ನು ತೆರೆಯಲು ಒಂದು ತರಗತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
    'Open the selected class': 'ಆಯ್ಕೆ ಮಾಡಿದ ತರಗತಿಯನ್ನು ತೆರೆಯಿರಿ',
    'View Subjects': 'ವಿಷಯಗಳನ್ನು ನೋಡಿ',
    Subjects: 'ವಿಷಯಗಳು',
    'Choose a class first': 'ಮೊದಲು ತರಗತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    'The subject visuals need a class context before they can load.': 'ವಿಷಯ ದೃಶ್ಯಗಳು ಲೋಡ್ ಆಗಲು ಮೊದಲು ತರಗತಿಯ ಮಾಹಿತಿ ಬೇಕು.',
    'Back to class dashboard': 'ತರಗತಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂದಿರುಗಿ',
    'Back to classes': 'ತರಗತಿಗಳಿಗೆ ಹಿಂದಿರುಗಿ',
    'Open any subject to inspect textbooks, workbooks, and chapter maps.': 'ಪಠ್ಯಪುಸ್ತಕಗಳು, ವರ್ಕ್‌ಬುಕ್‌ಗಳು ಮತ್ತು ಅಧ್ಯಾಯ ನಕ್ಷೆಗಳನ್ನು ನೋಡಲು ಯಾವುದಾದರೂ ವಿಷಯ ತೆರೆಯಿರಿ.',
    'Browse subjects': 'ವಿಷಯಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ',
    'Search by subject or textbook title.': 'ವಿಷಯ ಅಥವಾ ಪಠ್ಯಪುಸ್ತಕ ಶೀರ್ಷಿಕೆಯಿಂದ ಹುಡುಕಿ.',
    'Search subjects...': 'ವಿಷಯಗಳನ್ನು ಹುಡುಕಿ...',
    Open: 'ತೆರೆಯಿರಿ',
    Back: 'ಹಿಂದೆ',
    'Source textbook:': 'ಮೂಲ ಪಠ್ಯಪುಸ್ತಕ:',
    'Enter your answer': 'ನಿಮ್ಮ ಉತ್ತರವನ್ನು ನಮೂದಿಸಿ',
    'Type your thinking here...': 'ನಿಮ್ಮ ಆಲೋಚನೆಯನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...',
    'Speak your answer': 'ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಹೇಳಿ',
    'Listening...': 'ಕೇಳಲಾಗುತ್ತಿದೆ...',
    characters: 'ಅಕ್ಷರಗಳು',
    Hint: 'ಸುಳಿವು',
    'Hide hint': 'ಸುಳಿವು ಮರೆಮಾಡಿ',
    'Saving...': 'ಉಳಿಸಲಾಗುತ್ತಿದೆ...',
    'Check my understanding': 'ನನ್ನ ತಿಳುವಳಿಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ',
    'Session Complete': 'ಅಧಿವೇಶನ ಪೂರ್ಣಗೊಂಡಿದೆ',
    'What we found': 'ನಾವು ಕಂಡುಕೊಂಡದ್ದು',
    Confidence: 'ವಿಶ್ವಾಸ',
    'Here is the correction': 'ಇಲ್ಲಿದೆ ತಿದ್ದುಪಡಿ',
    'What to do next': 'ಮುಂದೆ ಏನು ಮಾಡಬೇಕು',
    'Visual Explanation': 'ದೃಶ್ಯ ವಿವರಣೆ',
    'Conceptual Questions': 'ಪರಿಕಲ್ಪನಾ ಪ್ರಶ್ನೆಗಳು',
    'Misconception Check': 'ತಪ್ಪು ಕಲ್ಪನೆಗಳ ತಪಾಸಣೆ',
    'Catalog Not Found': 'ಕ್ಯಾಟಲಾಗ್ ಕಂಡುಬಂದಿಲ್ಲ',
    'Back to Selection': 'ಆಯ್ಕೆಗೆ ಹಿಂತಿರುಗಿ',
    'All Chapters': 'ಎಲ್ಲಾ ಅಧ್ಯಾಯಗಳು',
    'Search chapters and topics...': 'ಅಧ್ಯಾಯಗಳು ಮತ್ತು ವಿಷಯಗಳನ್ನು ಹುಡುಕಿ...',
    'Interactive animations, questions, and misconception probes': 'ಪರಸ್ಪರ ಅನಿಮೇಷನ್‌ಗಳು, ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ತಪ್ಪು ಕಲ್ಪನೆಗಳ ತಪಾಸಣೆ',
    'Topic not found': 'ವಿಷಯ ಕಂಡುಬಂದಿಲ್ಲ',
    'The requested chapter or topic does not exist.': 'ವಿನಂತಿಸಿದ ಅಧ್ಯಾಯ ಅಥವಾ ವಿಷಯ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.',
    'Back to Chapters': 'ಅಧ್ಯಾಯಗಳಿಗೆ ಹಿಂತಿರುಗಿ',
    'I understand, continue to questions': 'ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡೆ, ಪ್ರಶ್ನೆಗಳಿಗೆ ಮುಂದುವರಿಯಿರಿ',
    'No questions available for this topic yet.': 'ಈ ವಿಷಯಕ್ಕೆ ಇನ್ನೂ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಲಭ್ಯವಿಲ್ಲ.',
    'Continue to misconception check': 'ತಪ್ಪು ಕಲ್ಪನೆಗಳ ತಪಾಸಣೆಗೆ ಮುಂದುವರಿಯಿರಿ',
    'Show hint': 'ಸುಳಿವು ತೋರಿಸಿ',
    'Concept Coverage': 'ಪರಿಕಲ್ಪನೆ ವ್ಯಾಪ್ತಿ',
    'Previous': 'ಹಿಂದಿನ',
    'Next question': 'ಮುಂದಿನ ಪ್ರಶ್ನೆ',
    'No misconception probes available for this topic yet.': 'ಈ ವಿಷಯಕ್ಕೆ ಇನ್ನೂ ಯಾವುದೇ ತಪ್ಪು ಕಲ್ಪನೆಗಳ ತಪಾಸಣೆ ಲಭ್ಯವಿಲ್ಲ.',
    'These probes test for common misunderstandings. Choose carefully!': 'ಈ ತಪಾಸಣೆಗಳು ಸಾಮಾನ್ಯ ತಪ್ಪು ತಿಳುವಳಿಕೆಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತವೆ. ಎಚ್ಚರಿಕೆಯಿಂದ ಆರಿಸಿ!',
    'Results Summary': 'ಫಲಿತಾಂಶಗಳ ಸಾರಾಂಶ',
    'correct': 'ಸರಿ',
    'Next': 'ಮುಂದಿನ',
    'Dismiss install prompt': 'ಇನ್‌ಸ್ಟಾಲ್ ಸಂದೇಶ ಮುಚ್ಚಿ',
  },
}

export function getLanguageMeta(language) {
  return SUPPORTED_LANGUAGES.find((entry) => entry.code === language) ?? SUPPORTED_LANGUAGES[0]
}

export function t(language, section, key) {
  return translations[language]?.[section]?.[key] || translations.en[section]?.[key] || key
}

export function translatePhrase(language, phrase) {
  if (language === 'en' || !phrase) return phrase

  const dictionary = phraseTranslations[language] ?? {}
  const trimmed = phrase.trim()
  const leading = phrase.match(/^\s*/)?.[0] ?? ''
  const trailing = phrase.match(/\s*$/)?.[0] ?? ''

  if (dictionary[trimmed]) {
    return `${leading}${dictionary[trimmed]}${trailing}`
  }

  const result = translatePattern(language, trimmed, dictionary)
  return result ? `${leading}${result}${trailing}` : phrase
}

function translatePattern(language, phrase, dictionary) {
  const languageName = dictionary[phrase]
  if (languageName) return languageName

  const countMatch = phrase.match(/^(\d+)\s+(subjects?|books?|chapters?|topics?|questions?|characters?|pending)$/i)
  if (countMatch) {
    const [, count, noun] = countMatch
    return `${count} ${translateNoun(language, noun.toLowerCase())}`
  }

  const classSubjects = phrase.match(/^(.+)\s+Subjects$/)
  if (classSubjects) {
    return language === 'hi'
      ? `${classSubjects[1]} विषय`
      : `${classSubjects[1]} ವಿಷಯಗಳು`
  }

  const resultsFor = phrase.match(/^Results for\s+(.+)$/)
  if (resultsFor) {
    return language === 'hi'
      ? `${resultsFor[1]} के परिणाम`
      : `${resultsFor[1]} ಫಲಿತಾಂಶಗಳು`
  }

  const continueClass = phrase.match(/^Continue into subject distribution, document coverage, and chapter maps for (.+)\.$/)
  if (continueClass) {
    return language === 'hi'
      ? `${continueClass[1]} के लिए विषय वितरण, दस्तावेज़ कवरेज और अध्याय मानचित्र पर आगे बढ़ें.`
      : `${continueClass[1]} ಗಾಗಿ ವಿಷಯ ವಿತರಣೆ, ದಾಖಲೆ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಅಧ್ಯಾಯ ನಕ್ಷೆಗಳಿಗೆ ಮುಂದುವರಿಯಿರಿ.`
  }

  const noSubjects = phrase.match(/^No subjects matched "(.+)"\.$/)
  if (noSubjects) {
    return language === 'hi'
      ? `"${noSubjects[1]}" से कोई विषय मेल नहीं खाया.`
      : `"${noSubjects[1]}" ಗೆ ಯಾವುದೇ ವಿಷಯ ಹೊಂದಿಕೆಯಾಗಿಲ್ಲ.`
  }

  const range = phrase.match(/^(\d+)\s+to\s+(\d+)$/)
  if (range) {
    return language === 'hi'
      ? `${range[1]} से ${range[2]}`
      : `${range[1]} ರಿಂದ ${range[2]}`
  }

  return null
}

function translateNoun(language, noun) {
  const nouns = {
    hi: {
      subject: 'विषय',
      subjects: 'विषय',
      book: 'पुस्तक',
      books: 'पुस्तकें',
      chapter: 'अध्याय',
      chapters: 'अध्याय',
      topic: 'विषय',
      topics: 'विषय',
      question: 'प्रश्न',
      questions: 'प्रश्न',
      character: 'अक्षर',
      characters: 'अक्षर',
      pending: 'लंबित',
    },
    kn: {
      subject: 'ವಿಷಯ',
      subjects: 'ವಿಷಯಗಳು',
      book: 'ಪುಸ್ತಕ',
      books: 'ಪುಸ್ತಕಗಳು',
      chapter: 'ಅಧ್ಯಾಯ',
      chapters: 'ಅಧ್ಯಾಯಗಳು',
      topic: 'ವಿಷಯ',
      topics: 'ವಿಷಯಗಳು',
      question: 'ಪ್ರಶ್ನೆ',
      questions: 'ಪ್ರಶ್ನೆಗಳು',
      character: 'ಅಕ್ಷರ',
      characters: 'ಅಕ್ಷರಗಳು',
      pending: 'ಬಾಕಿ',
    },
  }

  return nouns[language]?.[noun] ?? noun
}
