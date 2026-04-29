export const translations = {
  en: {
    ui: {
      select_level: "Select your class level",
      select_subject: "Select subject",
      select_topic: "Select topic",
      enter_answer: "Enter your answer",
      speak: "Speak your answer",
      submit: "Check my understanding",
      misconception_label: "What we found",
      explanation_label: "Here is the correction",
      visual_label: "Visual explanation",
      suggestion_label: "What to do next"
    },
    misconception_types: {
      partial_understanding: "Partial Understanding",
      wrong_concept: "Wrong Concept",
      conceptual_error: "Conceptual Error",
      formula_misuse: "Formula Misuse",
      step_error: "Step Error",
      derivation_error: "Derivation Error",
      no_misconception: "Correct!"
    },
    suggestions: {
      retry: "Try again with this hint",
      peer_learning: "Discuss with a classmate",
      teacher_flag: "Ask your teacher",
      advance: "Great! Move to next topic"
    }
  },
  kn: {
    ui: {
      select_level: "ನಿಮ್ಮ ತರಗತಿಯ ಮಟ್ಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      select_subject: "ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      select_topic: "ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      enter_answer: "ನಿಮ್ಮ ಉತ್ತರವನ್ನು ನಮೂದಿಸಿ",
      speak: "ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಹೇಳಿ",
      submit: "ನನ್ನ ತಿಳುವಳಿಕೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
      misconception_label: "ನಾವು ಕಂಡುಕೊಂಡದ್ದು",
      explanation_label: "ಇಲ್ಲಿ ತಿದ್ದುಪಡಿ ಇದೆ",
      visual_label: "ದೃಶ್ಯ ವಿವರಣೆ",
      suggestion_label: "ಮುಂದೆ ಏನು ಮಾಡಬೇಕು"
    },
    misconception_types: {
      partial_understanding: "ಭಾಗಶಃ ತಿಳುವಳಿಕೆ",
      wrong_concept: "ತಪ್ಪು ಪರಿಕಲ್ಪನೆ",
      conceptual_error: "ಪರಿಕಲ್ಪನಾ ದೋಷ",
      formula_misuse: "ಸೂತ್ರದ ದುರ್ಬಳಕೆ",
      step_error: "ಹಂತದ ದೋಷ",
      derivation_error: "ಉತ್ಪನ್ನ ದೋಷ",
      no_misconception: "ಸರಿ!"
    },
    suggestions: {
      retry: "ಈ ಸುಳಿವಿನೊಂದಿಗೆ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
      peer_learning: "ಸಹಪಾಠಿಯೊಂದಿಗೆ ಚರ್ಚಿಸಿ",
      teacher_flag: "ನಿಮ್ಮ ಶಿಕ್ಷಕರನ್ನು ಕೇಳಿ",
      advance: "ಅದ್ಭುತ! ಮುಂದಿನ ವಿಷಯಕ್ಕೆ ಹೋಗಿ"
    }
  },
  hi: {
    ui: {
      select_level: "अपनी कक्षा का स्तर चुनें",
      select_subject: "विषय चुनें",
      select_topic: "प्रकरण चुनें",
      enter_answer: "अपना उत्तर दर्ज करें",
      speak: "अपना उत्तर बोलें",
      submit: "मेरी समझ की जांच करें",
      misconception_label: "हमने क्या पाया",
      explanation_label: "यहाँ सुधार है",
      visual_label: "दृश्य स्पष्टीकरण",
      suggestion_label: "आगे क्या करना है"
    },
    misconception_types: {
      partial_understanding: "आंशिक समझ",
      wrong_concept: "गलत अवधारणा",
      conceptual_error: "वैचारिक त्रुटि",
      formula_misuse: "सूत्र का गलत उपयोग",
      step_error: "चरण त्रुटि",
      derivation_error: "व्युत्पत्ति त्रुटि",
      no_misconception: "सही!"
    },
    suggestions: {
      retry: "इस संकेत के साथ पुनः प्रयास करें",
      peer_learning: "सहपाठी के साथ चर्चा करें",
      teacher_flag: "अपने शिक्षक से पूछें",
      advance: "बहुत बढ़िया! अगले विषय पर जाएं"
    }
  }
};

export function t(language, section, key) {
  return translations[language]?.[section]?.[key] || translations['en'][section]?.[key] || key;
}
