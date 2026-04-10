import PIPELINE_STEPS from '../constants/pipeline';
import { ChevronIcon } from './Icons';

/**
 * PipelineDisplay — Visual indicator of the compiler pipeline stages.
 * Shows Lexer → Parser → Type Check → Execute → Audio Out with
 * dynamic states: pending, active, completed, or error.
 *
 * @param {{ activeStep: string|null, errorStep: string|null }} props
 */
function PipelineDisplay({ activeStep, errorStep }) {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {PIPELINE_STEPS.map((step, i) => {
        let state = 'pending';
        const activeIdx = PIPELINE_STEPS.findIndex(s => s.id === activeStep);
        const errorIdx  = PIPELINE_STEPS.findIndex(s => s.id === errorStep);

        if (errorStep && i <= errorIdx) {
          state = i === errorIdx ? 'error' : 'completed';
        } else if (activeStep) {
          if (i < activeIdx)      state = 'completed';
          else if (i === activeIdx) state = 'active';
        }

        return (
          <div key={step.id} className="flex items-center gap-1">
            <div className={`pipeline-step ${state}`}>
              <span>{step.icon}</span>
              <span>{step.label}</span>
            </div>
            {i < PIPELINE_STEPS.length - 1 && <ChevronIcon />}
          </div>
        );
      })}
    </div>
  );
}

export default PipelineDisplay;
