"use client"

import { useState, useRef } from "react"
import Image from "next/image"

type DetectedItem = {
  name: string
  count: number
  estimatedWeight: number
}

const WEIGHT_MAP: Record<string, number> = {
  bottle: 0.03,
  cup: 0.02,
  "wine glass": 0.3,
  fork: 0.05,
  knife: 0.05,
  spoon: 0.04,
  bowl: 0.15,
  book: 0.4,
  "cell phone": 0.18,
  laptop: 1.8,
  keyboard: 0.7,
  mouse: 0.1,
  tv: 8,
}

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<DetectedItem[]>([])
  const [message, setMessage] = useState("")
  const imageRef = useRef<HTMLImageElement | null>(null)

  const detectWaste = async () => {
    if (!imageRef.current) return

    try {
      setLoading(true)
      setMessage("AI is analysing your recyclable items...")

      const tf = await import("@tensorflow/tfjs")
      const cocoSsd = await import("@tensorflow-models/coco-ssd")

      await tf.ready()

      const model = await cocoSsd.load()

      const predictions = await model.detect(imageRef.current)

      const recyclablePredictions = predictions.filter(
        (prediction) =>
          WEIGHT_MAP[prediction.class] &&
          prediction.score >= 0.5
      )

      const grouped: Record<string, number> = {}

      recyclablePredictions.forEach((prediction) => {
        grouped[prediction.class] =
          (grouped[prediction.class] || 0) + 1
      })

      const detectedItems: DetectedItem[] = Object.entries(grouped).map(
        ([name, count]) => ({
          name,
          count,
          estimatedWeight: count * (WEIGHT_MAP[name] || 0),
        })
      )

      setItems(detectedItems)

      if (detectedItems.length === 0) {
        setMessage(
          "No supported recyclable items were detected. Try a clearer image."
        )
      } else {
        setMessage("Recyclable items detected successfully.")
      }
    } catch (error) {
      console.error(error)

      setMessage(
        "Unable to analyse the image. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]

    if (!file) return

    const url = URL.createObjectURL(file)

    setImageUrl(url)
    setItems([])
    setMessage("")
  }

  const totalWeight = items.reduce(
    (total, item) => total + item.estimatedWeight,
    0
  )

  /*
    These are initial estimation factors.
    Later you can replace them with verified environmental data.
  */
  const co2Saved = totalWeight * 1.6
  const landfillSaved = totalWeight
  const greenCredits = Math.round(totalWeight * 10)

  return (
    <main className="min-h-screen bg-background">

      {/* HERO */}

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">

        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-green-600">
          GreenCycle
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Turn your waste into impact
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Upload a photo of your recyclable waste.
          GreenCycle automatically identifies the items and calculates
          your environmental impact.
        </p>

        <a
          href="#calculator"
          className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
        >
          Calculate My Impact
        </a>

      </section>


      {/* AUTOMATIC ECO CALCULATOR */}

      <section
        id="calculator"
        className="mx-auto max-w-5xl px-6 py-20"
      >

        <div className="text-center">

          <p className="text-sm font-medium uppercase tracking-widest text-green-600">
            AI Powered
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Automatic Eco Calculator
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            No sliders. No manual calculations.
            Simply upload a photo and let GreenCycle analyse it.
          </p>

        </div>


        {/* UPLOAD */}

        <div className="mx-auto mt-10 max-w-xl">

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 text-center hover:bg-muted/40">

            <span className="text-lg font-semibold">
              Upload recyclable items
            </span>

            <span className="mt-2 text-sm text-muted-foreground">
              JPG, PNG or camera photo
            </span>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

          </label>

        </div>


        {/* IMAGE */}

        {imageUrl && (

          <div className="mx-auto mt-8 max-w-xl">

            <div className="overflow-hidden rounded-xl border">

              <img
                ref={imageRef}
                src={imageUrl}
                alt="Uploaded recyclable items"
                className="max-h-[450px] w-full object-contain"
                onLoad={detectWaste}
              />

            </div>

            <button
              onClick={detectWaste}
              disabled={loading}
              className="mt-5 w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Analysing..."
                : "Analyse Waste"}
            </button>

          </div>

        )}


        {/* STATUS */}

        {message && (

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {message}
          </p>

        )}


        {/* DETECTED ITEMS */}

        {items.length > 0 && (

          <div className="mx-auto mt-12 max-w-3xl">

            <h3 className="text-xl font-semibold">
              AI Detected
            </h3>

            <div className="mt-4 overflow-hidden rounded-xl border">

              {items.map((item) => (

                <div
                  key={item.name}
                  className="flex items-center justify-between border-b p-4 last:border-b-0"
                >

                  <div>

                    <p className="font-medium capitalize">
                      {item.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {item.count} detected
                    </p>

                  </div>

                  <p className="font-semibold">
                    {item.estimatedWeight.toFixed(2)} kg
                  </p>

                </div>

              ))}

            </div>

          </div>

        )}


        {/* IMPACT */}

        {items.length > 0 && (

          <div className="mx-auto mt-12 max-w-3xl">

            <h3 className="text-center text-2xl font-bold">
              Your Environmental Impact
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">

              <div className="rounded-xl border p-6 text-center">

                <p className="text-3xl font-bold">
                  {totalWeight.toFixed(2)}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  kg waste diverted
                </p>

              </div>


              <div className="rounded-xl border p-6 text-center">

                <p className="text-3xl font-bold">
                  {co2Saved.toFixed(2)}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  kg CO₂ estimated saved
                </p>

              </div>


              <div className="rounded-xl border p-6 text-center">

                <p className="text-3xl font-bold">
                  {greenCredits}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Green Credits
                </p>

              </div>

            </div>

          </div>

        )}

      </section>

    </main>
  )
}
