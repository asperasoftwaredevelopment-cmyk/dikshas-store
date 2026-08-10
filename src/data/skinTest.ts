import { getProductById, type Product } from './products'

export type SkinType = 'oily' | 'dry' | 'combination' | 'sensitive' | 'normal'
export type Concern =
  | 'clarity'
  | 'hydration'
  | 'brightness'
  | 'protection'
  | 'aging'

export type QuizAnswers = {
  skinType: SkinType | null
  concern: Concern | null
  routine: 'minimal' | 'full' | null
}

export const skinTypeOptions: {
  id: SkinType
  label: string
  hint: string
}[] = [
  {
    id: 'oily',
    label: 'Oily',
    hint: 'Shine by midday, enlarged-looking pores',
  },
  {
    id: 'dry',
    label: 'Dry',
    hint: 'Tightness, flaky patches, needs cream',
  },
  {
    id: 'combination',
    label: 'Combination',
    hint: 'Oily T-zone with drier cheeks',
  },
  {
    id: 'sensitive',
    label: 'Sensitive',
    hint: 'Easily reactive, redness-prone',
  },
  {
    id: 'normal',
    label: 'Balanced',
    hint: 'Comfortable most days, mild concerns',
  },
]

export const concernOptions: {
  id: Concern
  label: string
  hint: string
}[] = [
  {
    id: 'clarity',
    label: 'Clarity & oil control',
    hint: 'Congestion, shine, uneven texture',
  },
  {
    id: 'hydration',
    label: 'Deep hydration',
    hint: 'Dryness, barrier comfort, plumpness',
  },
  {
    id: 'brightness',
    label: 'Brightness',
    hint: 'Dull tone, uneven looking skin',
  },
  {
    id: 'protection',
    label: 'Daily protection',
    hint: 'Sun, pollution, urban stress',
  },
  {
    id: 'aging',
    label: 'Firm & smooth',
    hint: 'Fine lines, under-eye tiredness',
  },
]

export const routineOptions: {
  id: NonNullable<QuizAnswers['routine']>
  label: string
  hint: string
}[] = [
  {
    id: 'minimal',
    label: 'Keep it simple',
    hint: '3 essentials — cleanse, treat, protect',
  },
  {
    id: 'full',
    label: 'Full ritual',
    hint: 'A richer routine with extras',
  },
]

type Recommendation = {
  title: string
  summary: string
  productIds: string[]
}

function uniqueProducts(ids: string[]): Product[] {
  const seen = new Set<string>()
  const list: Product[] = []
  for (const id of ids) {
    if (seen.has(id)) continue
    const p = getProductById(id)
    if (p) {
      seen.add(id)
      list.push(p)
    }
  }
  return list
}

export function getSkinRecommendations(
  answers: QuizAnswers,
): Recommendation & { products: Product[] } {
  const { skinType, concern, routine } = answers
  const ids: string[] = []

  // Always anchor on Multani Mitti for oily / combination / clarity paths
  if (
    skinType === 'oily' ||
    skinType === 'combination' ||
    concern === 'clarity'
  ) {
    ids.push('multani-mitti-soap')
  } else if (skinType === 'dry' || skinType === 'sensitive') {
    ids.push('honey-oat-soap')
  } else {
    ids.push('multani-mitti-soap')
  }

  if (skinType === 'dry') {
    ids.push('rosehip-wash')
  } else if (skinType === 'sensitive') {
    ids.push('green-tea-wash')
  } else {
    ids.push('green-tea-wash')
  }

  switch (concern) {
    case 'clarity':
      ids.push('niacinamide-serum', 'charcoal-detox-soap')
      break
    case 'hydration':
      ids.push('hyaluronic-cream', 'ceramide-barrier')
      break
    case 'brightness':
      ids.push('vitamin-c-serum', 'berry-lip-tint')
      break
    case 'protection':
      ids.push('daily-spf50', 'mineral-spf')
      break
    case 'aging':
      ids.push('retinol-eye-gel', 'caffeine-eye-gel')
      break
    default:
      ids.push('vitamin-c-serum')
  }

  // Moisture / SPF staples by skin type
  if (skinType === 'oily' || skinType === 'combination') {
    ids.push('hyaluronic-cream', 'daily-spf50')
  } else if (skinType === 'sensitive') {
    ids.push('ceramide-barrier', 'mineral-spf')
  } else if (skinType === 'dry') {
    ids.push('ceramide-barrier', 'daily-spf50')
  } else {
    ids.push('hyaluronic-cream', 'daily-spf50')
  }

  if (routine === 'full') {
    ids.push('caffeine-eye-gel', 'nude-lip-tint')
  }

  const limit = routine === 'minimal' ? 3 : 5
  const products = uniqueProducts(ids).slice(0, limit)

  const typeLabel =
    skinTypeOptions.find((o) => o.id === skinType)?.label ?? 'your'
  const concernLabel =
    concernOptions.find((o) => o.id === concern)?.label.toLowerCase() ??
    'balance'

  return {
    title: `Your ${typeLabel.toLowerCase()} skin ritual`,
    summary: `A curated edit for ${typeLabel.toLowerCase()} skin focused on ${concernLabel} — anchored by our Multani Mitti hero where it fits.`,
    productIds: products.map((p) => p.id),
    products,
  }
}
