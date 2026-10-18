import PIPELINE_STEPS from '../constants/pipeline';

/**
 * Compact stepper showing which compiler stage is running.
 * @param {{ activeStep: string|null, errorStep: string|null }} props
 */
function PipelineDisplay({ activeStep, errorStep }) {
  const activeIdx = PIPELINE_STEPS.findIndex(s => s.id === activeStep);
  const errorIdx = PIPELINE_STEPS.findIndex(s => s.id === errorStep);

  return (
    <ol className="pipeline" aria-label="Compiler pipeline">
      {PIPELINE_STEPS.map((step, i) => {
        let state = '';
        if (errorStep) {
          if (i < errorIdx) state = 'is-done';
          else if (i === errorIdx) state = 'is-error';
        } else if (activeStep) {
          if (i < activeIdx) state = 'is-done';
          else if (i === activeIdx) state = 'is-active';
        }

        return (
          <li key={step.id} className={`pipeline-step ${state}`} title={step.label}>
            <span className="pipeline-dot" />
            <span className="pipeline-label">{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
}

export default PipelineDisplay;
