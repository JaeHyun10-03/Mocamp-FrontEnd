import Tutorial1 from './Tutorial1';
import Tutorial2 from './Tutorial2';
import Tutorial3 from './Tutorial3';
import { useTutorial } from '@/stores/tutorial-store';
import TutorialBackground from './TutorialBackground';

const Tutorial = () => {
  const { step, nextTutorial, endTutorial } = useTutorial();

  const nextStep = () => {
    if (step < 3) {
      nextTutorial();
    } else {
      endTutorial(); // 마지막 단계에서는 튜토리얼 종료
    }
  };

  // step이 0이면 튜토리얼을 보여주지 않음
  if (step === 0) return null;

  return (
    <>
      <TutorialBackground>
        {step === 1 && <Tutorial1 onNext={nextStep} />}
        {step === 2 && <Tutorial2 onNext={nextStep} />}
        {step === 3 && <Tutorial3 onNext={nextStep} />}
      </TutorialBackground>
    </>
  );
};

export default Tutorial;
