import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react'
import { ProductCard } from '../components/ProductGrid'
import {
  concernOptions,
  getSkinRecommendations,
  routineOptions,
  skinTypeOptions,
  type Concern,
  type QuizAnswers,
  type SkinType,
} from '../data/skinTest'

const initial: QuizAnswers = {
  skinType: null,
  concern: null,
  routine: null,
}

export function SkinTestPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>(initial)
  const [done, setDone] = useState(false)

  const result = done ? getSkinRecommendations(answers) : null

  function reset() {
    setAnswers(initial)
    setStep(0)
    setDone(false)
  }

  function next() {
    if (step < 2) setStep((s) => s + 1)
    else setDone(true)
  }

  function back() {
    if (done) {
      setDone(false)
      return
    }
    setStep((s) => Math.max(0, s - 1))
  }

  const canContinue =
    (step === 0 && answers.skinType) ||
    (step === 1 && answers.concern) ||
    (step === 2 && answers.routine)

  return (
    <div className="page-shell skin-test-page">
      <section className="page-hero skin-test-hero" aria-labelledby="skin-heading">
        <p className="eyebrow">Skin test</p>
        <h1 id="skin-heading">Find your ritual</h1>
        <p>
          Three quick questions. We&apos;ll match Multani Mitti soap and
          supporting formulas to your skin type and goals.
        </p>
      </section>

      {!done ? (
        <section className="quiz" aria-label="Skin quiz">
          <div className="quiz-progress" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className={i <= step ? 'is-on' : ''} />
            ))}
          </div>

          {step === 0 && (
            <fieldset className="quiz-step">
              <legend>What best describes your skin?</legend>
              <div className="quiz-options">
                {skinTypeOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={
                      answers.skinType === opt.id
                        ? 'quiz-option is-selected'
                        : 'quiz-option'
                    }
                  >
                    <input
                      type="radio"
                      name="skinType"
                      value={opt.id}
                      checked={answers.skinType === opt.id}
                      onChange={() =>
                        setAnswers((a) => ({
                          ...a,
                          skinType: opt.id as SkinType,
                        }))
                      }
                    />
                    <span className="quiz-option-label">{opt.label}</span>
                    <span className="quiz-option-hint">{opt.hint}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset className="quiz-step">
              <legend>What do you want most right now?</legend>
              <div className="quiz-options">
                {concernOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={
                      answers.concern === opt.id
                        ? 'quiz-option is-selected'
                        : 'quiz-option'
                    }
                  >
                    <input
                      type="radio"
                      name="concern"
                      value={opt.id}
                      checked={answers.concern === opt.id}
                      onChange={() =>
                        setAnswers((a) => ({
                          ...a,
                          concern: opt.id as Concern,
                        }))
                      }
                    />
                    <span className="quiz-option-label">{opt.label}</span>
                    <span className="quiz-option-hint">{opt.hint}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="quiz-step">
              <legend>How full should your routine feel?</legend>
              <div className="quiz-options quiz-options-compact">
                {routineOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={
                      answers.routine === opt.id
                        ? 'quiz-option is-selected'
                        : 'quiz-option'
                    }
                  >
                    <input
                      type="radio"
                      name="routine"
                      value={opt.id}
                      checked={answers.routine === opt.id}
                      onChange={() =>
                        setAnswers((a) => ({ ...a, routine: opt.id }))
                      }
                    />
                    <span className="quiz-option-label">{opt.label}</span>
                    <span className="quiz-option-hint">{opt.hint}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <div className="quiz-nav">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={back}
              disabled={step === 0}
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={next}
              disabled={!canContinue}
            >
              {step === 2 ? 'See my ritual' : 'Continue'}
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      ) : (
        result && (
          <section className="quiz-result" aria-labelledby="result-heading">
            <div className="quiz-result-banner">
              <Sparkles size={22} aria-hidden="true" />
              <div>
                <h2 id="result-heading">{result.title}</h2>
                <p>{result.summary}</p>
              </div>
            </div>

            <div className="product-grid">
              {result.products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>

            <div className="quiz-result-actions">
              <Link to="/box" className="btn btn-primary">
                Build a custom box
              </Link>
              <Link to="/shop" className="btn btn-secondary">
                Browse all products
              </Link>
              <button type="button" className="btn btn-secondary" onClick={reset}>
                <RotateCcw size={16} /> Retake test
              </button>
            </div>
          </section>
        )
      )}
    </div>
  )
}
