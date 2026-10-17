import { type StaticImageData } from "next/image";

// Diagnostics & Tuning
import ecuTuning from "@/public/ecu-tuning.png";
import dynoTuning from "@/public/dyno-tuning.png";
import coolingSystem from "@/public/cooling-system.png";

// Repairs
import radCooling from "@/public/rad-cooling.png";

// Suspension
import wheelAlignment from "@/public/wheel-alignment.png";

// Placeholder for missing images
import person from "@/public/Person.png";

export type ProcessStep = { title: string; body: string };
export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  image: StaticImageData;
  description: string;
  overview: string;
  included: string[];
  process: ProcessStep[];
  faqs: FAQ[];
};

export type ServiceCategory = {
  id: string;
  label: string;
  title: string;
  tagline: string;
  services: Service[];
};

// Shared by services that follow the usual inspect → quote → fix → hand-off flow.
const STANDARD_PROCESS: ProcessStep[] = [
  {
    title: "Book & Drop Off",
    body: "Request a slot online or give us a call, then bring the car in at your scheduled time.",
  },
  {
    title: "Inspect & Quote",
    body: "A technician inspects the vehicle and walks you through what we found with an itemized, up-front quote.",
  },
  {
    title: "Do the Work",
    body: "Once you approve, we complete the job using quality parts and factory-spec procedures.",
  },
  {
    title: "Test & Hand Off",
    body: "We road-test and double-check everything, then go over the work with you at pickup.",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "diagnostics",
    label: "01",
    title: "Diagnostics & Tuning",
    tagline: "Precision-engineered performance starts here.",
    services: [
      {
        slug: "ecu-diagnostics",
        title: "ECU Diagnostics",
        image: ecuTuning,
        description:
          "Full OBD-II scanning and fault code analysis across all modules.",
        overview:
          "A check engine light or odd drivability issue can come from dozens of sources. We scan every module on the vehicle, read live sensor data, and trace the fault to its root cause so you only pay to fix what's actually wrong.",
        included: [
          "Full-system OBD-II scan across all control modules",
          "Fault code reading, interpretation, and freeze-frame review",
          "Live sensor data analysis",
          "Written summary of findings and recommended repairs",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "Can't I just use a cheap code reader?",
            answer:
              "A basic reader only shows generic engine codes. Our scan tools read every module and live data, which is what it takes to find the actual cause rather than just the symptom.",
          },
          {
            question: "Do I have to do the repair with you?",
            answer:
              "No. You'll get a clear explanation of what we found, and the decision on how to proceed is yours.",
          },
          {
            question: "How long does a diagnostic take?",
            answer:
              "Most scans are done the same day. Intermittent or electrical faults can take longer, and we'll keep you updated if that's the case.",
          },
        ],
      },
      {
        slug: "dyno-tuning",
        title: "Dyno Tuning",
        image: dynoTuning,
        description:
          "Custom power maps optimized for your engine build and fuel.",
        overview:
          "Off-the-shelf tunes are written for someone else's car. We tune on the dyno against your exact engine, modifications, and fuel, so you get more power with safe air-fuel ratios and timing you can trust every day.",
        included: [
          "Pre-tune health check and baseline dyno pull",
          "Custom ECU calibration for your build and fuel",
          "Air-fuel ratio and timing optimization under load",
          "Before-and-after dyno sheets",
        ],
        process: [
          {
            title: "Consultation",
            body: "We talk through your build, goals, and how you use the car so the tune matches how you drive.",
          },
          {
            title: "Health Check & Baseline",
            body: "We inspect the car for mechanical issues, then record baseline power and torque on the dyno.",
          },
          {
            title: "Tune on the Dyno",
            body: "We dial in fueling, timing, and boost (if applicable) across the rev range, logging every pull.",
          },
          {
            title: "Review Results",
            body: "You get your before-and-after numbers and a walkthrough of what changed.",
          },
        ],
        faqs: [
          {
            question: "Is a tune safe for a daily driver?",
            answer:
              "Yes, when it's done properly. We tune for reliability first and only add power the engine and supporting parts can handle.",
          },
          {
            question: "Do I need other mods before tuning?",
            answer:
              "Not necessarily. Many cars gain from a tune alone, and we'll tell you honestly whether supporting mods are worth it for your goals.",
          },
          {
            question: "Can the tune be reverted?",
            answer:
              "In most cases yes. We save your stock calibration before making changes.",
          },
        ],
      },
      {
        slug: "general-maintenance",
        title: "General Maintenance",
        image: coolingSystem,
        description:
          "Oil, filters, fluids — factory intervals or custom schedules.",
        overview:
          "Regular maintenance is the cheapest way to keep a car reliable. We follow your manufacturer's schedule (or a tighter one for hard-driven cars) and flag anything worth keeping an eye on before it turns into a repair.",
        included: [
          "Oil and filter change with the correct spec oil",
          "Air and cabin filter inspection or replacement",
          "Fluid level and condition checks",
          "Multi-point inspection of brakes, tires, and belts",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "How often should I service my car?",
            answer:
              "Follow your owner's manual as a baseline. Cars that see heavy stop-and-go city driving or track use often benefit from shorter intervals, and we can recommend a schedule.",
          },
          {
            question: "Will servicing here affect my warranty?",
            answer:
              "Using an independent shop doesn't void a manufacturer warranty as long as the maintenance is done to spec. We keep records of all work performed.",
          },
          {
            question: "Can I wait while it's done?",
            answer:
              "For routine services, usually yes. Book ahead and let us know you'd like to wait.",
          },
        ],
      },
    ],
  },
  {
    id: "repairs",
    label: "02",
    title: "Repairs",
    tagline: "Fixed right the first time, every time.",
    services: [
      {
        slug: "engine-repair",
        title: "Engine Repair",
        image: person,
        description:
          "From head gaskets to full rebuilds on domestic and import engines.",
        overview:
          "Whether it's a leak, a misfire, or a major failure, we diagnose engine problems thoroughly and repair them properly, from gaskets and timing components to complete rebuilds.",
        included: [
          "In-depth engine diagnosis (compression, leak-down as needed)",
          "Gasket, seal, and timing component replacement",
          "Internal repairs and full rebuilds",
          "Post-repair testing and road test",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "Is it worth repairing my engine or should I replace it?",
            answer:
              "It depends on the damage and the car's value. We'll lay out both options with costs so you can make an informed choice.",
          },
          {
            question: "Do you work on imports?",
            answer:
              "Yes. We work on domestic, European, and Asian engines.",
          },
          {
            question: "How long do engine repairs take?",
            answer:
              "Simple repairs can be quick, while rebuilds depend on parts availability. You'll get a time estimate with your quote.",
          },
        ],
      },
      {
        slug: "electrical-wiring",
        title: "Electrical & Wiring",
        image: person,
        description:
          "Tracing shorts, harness repairs, and custom wiring solutions.",
        overview:
          "Electrical problems are often intermittent and frustrating. We trace faults methodically, repair damaged harnesses properly, and handle clean custom wiring for accessories and upgrades.",
        included: [
          "Battery, charging, and starting system testing",
          "Short and parasitic draw tracing",
          "Harness and connector repair",
          "Custom wiring for lighting, audio, and accessories",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "My battery keeps dying. Can you find out why?",
            answer:
              "Yes. We test the battery and charging system and check for parasitic draws that drain it while parked.",
          },
          {
            question: "Can you fix wiring from a previous bad install?",
            answer:
              "Absolutely. We regularly clean up and redo aftermarket wiring so it's safe and reliable.",
          },
          {
            question: "Why can electrical diagnosis take a while?",
            answer:
              "Intermittent faults have to be reproduced before they can be traced. We'll keep you updated as we narrow it down.",
          },
        ],
      },
      {
        slug: "cooling-system",
        title: "Cooling System",
        image: radCooling,
        description: "Radiator, thermostat, water pump — keep temps in check.",
        overview:
          "Overheating can destroy an engine fast. We pressure-test the cooling system, find leaks and failing parts, and replace them so your engine runs at the right temperature in traffic or on track.",
        included: [
          "Cooling system pressure test",
          "Radiator, hose, and thermostat replacement",
          "Water pump service",
          "Coolant flush and refill with the correct spec coolant",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "My temperature gauge is climbing. Can I keep driving?",
            answer:
              "Pull over and let it cool if it's running hot. Continued driving can cause serious engine damage, so it's best to have it towed or brought in as soon as possible.",
          },
          {
            question: "How often should coolant be changed?",
            answer:
              "Check your owner's manual. Intervals vary widely by manufacturer and coolant type.",
          },
          {
            question: "Do you offer performance radiators?",
            answer:
              "Yes. We can install upgraded radiators and cooling components for tuned or track cars.",
          },
        ],
      },
    ],
  },
  {
    id: "suspension",
    label: "03",
    title: "Suspension, Handling & Braking",
    tagline: "Feel every corner the way it was meant to be felt.",
    services: [
      {
        slug: "coilover-install",
        title: "Coilover Install",
        image: person,
        description:
          "Street and track coilover fitting with corner-weight setup.",
        overview:
          "Coilovers transform how a car drives, but only if they're set up correctly. We install, set ride height and damping for how you drive, and finish with an alignment so the car handles the way it should.",
        included: [
          "Coilover installation front and rear",
          "Ride height and damping setup",
          "Corner weighting (on request)",
          "Alignment after install",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "Can I bring my own coilovers?",
            answer:
              "Yes. We'll inspect them before install to make sure everything's in good shape.",
          },
          {
            question: "Will coilovers make my car ride rough?",
            answer:
              "Not if they're set up for your use. We tune ride height and damping for street comfort, track performance, or a balance of both.",
          },
          {
            question: "Why do I need an alignment afterward?",
            answer:
              "Changing ride height changes alignment angles. Skipping it causes uneven tire wear and poor handling.",
          },
        ],
      },
      {
        slug: "big-brake-kits",
        title: "Big Brake Kits",
        image: person,
        description:
          "Upgraded rotors, calipers, and pads for serious stopping power.",
        overview:
          "A big brake kit adds stopping power and fade resistance for spirited driving and track days. We help you pick a kit that fits your wheels and goals, install it, and bed in the pads properly.",
        included: [
          "Kit selection and wheel fitment check",
          "Caliper, rotor, and pad installation",
          "Brake fluid flush and bleed",
          "Pad bedding and road test",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "Will a big brake kit fit my wheels?",
            answer:
              "Not every kit clears every wheel. We check fitment before ordering so there are no surprises.",
          },
          {
            question: "Do I need a big brake kit for the street?",
            answer:
              "Often a quality pad, fluid, and rotor upgrade is enough. We'll recommend what makes sense for how you drive.",
          },
          {
            question: "What is pad bedding?",
            answer:
              "A controlled break-in procedure that lays pad material onto the rotor for smooth, consistent braking. We do it before handing the car back.",
          },
        ],
      },
      {
        slug: "alignment",
        title: "Alignment",
        image: wheelAlignment,
        description: "4-wheel alignment with custom camber and toe settings.",
        overview:
          "A proper alignment keeps the car tracking straight, protects your tires, and sharpens handling. We align to factory spec or to custom settings for lowered and performance cars.",
        included: [
          "Suspension and steering component check",
          "4-wheel alignment",
          "Custom camber, caster, and toe settings on request",
          "Before-and-after alignment printout",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "How do I know if I need an alignment?",
            answer:
              "Common signs are the car pulling to one side, an off-center steering wheel, or uneven tire wear.",
          },
          {
            question: "Can you align a lowered car?",
            answer:
              "Yes. We regularly align lowered and modified cars and can set custom specs.",
          },
          {
            question: "How often should I get an alignment?",
            answer:
              "Whenever you install new tires or suspension parts, after hitting a big pothole, or if you notice any of the signs above.",
          },
        ],
      },
    ],
  },
  {
    id: "wheels",
    label: "04",
    title: "Wheels, Tires & Alignment",
    tagline: "The four patches of rubber that matter most.",
    services: [
      {
        slug: "tire-mounting-balancing",
        title: "Tire Mounting & Balancing",
        image: person,
        description: "Road-force balancing for a vibration-free, smooth ride.",
        overview:
          "We mount tires carefully to avoid damaging your wheels and use road-force balancing to eliminate vibrations that a standard balance can miss.",
        included: [
          "Tire mounting with wheel-safe equipment",
          "Road-force balancing",
          "Valve stem and TPMS check",
          "Lug nuts torqued to spec",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "Can I bring my own tires?",
            answer: "Yes. We'll mount and balance tires you've purchased elsewhere.",
          },
          {
            question: "What's road-force balancing?",
            answer:
              "It presses a roller against the tire to simulate the road, finding uniformity issues a standard spin balance can't detect.",
          },
          {
            question: "Will you scratch my wheels?",
            answer:
              "We use wheel-safe mounting equipment and take care with aftermarket and low-profile setups.",
          },
        ],
      },
      {
        slug: "wheel-spacers",
        title: "Wheel Spacers",
        image: person,
        description:
          "Hub-centric spacers installed safely with extended studs.",
        overview:
          "Spacers improve stance and fitment, but they have to be installed correctly to be safe. We use hub-centric spacers and extended studs where needed, torqued to spec.",
        included: [
          "Fitment check for clearance",
          "Hub-centric spacer installation",
          "Extended wheel studs where required",
          "Torque to spec and re-check",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "Are wheel spacers safe?",
            answer:
              "Quality hub-centric spacers installed correctly with proper thread engagement are safe. That's the only way we install them.",
          },
          {
            question: "What size spacer do I need?",
            answer:
              "It depends on your wheels, tires, and suspension. We'll measure and recommend a size.",
          },
          {
            question: "Do I need to re-torque them later?",
            answer:
              "We recommend a quick re-torque check after the first 50–100 miles.",
          },
        ],
      },
      {
        slug: "tpms-service",
        title: "TPMS Service",
        image: person,
        description: "Sensor replacement, reprogramming, and system resets.",
        overview:
          "A tire pressure warning that won't go away usually means a failed or unprogrammed sensor. We test, replace, and program TPMS sensors so the system works as intended.",
        included: [
          "TPMS sensor testing",
          "Sensor replacement",
          "Programming and relearn to the vehicle",
          "Tire pressure set to spec",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "Why is my TPMS light on even though my tires are fine?",
            answer:
              "Sensors have batteries that wear out over time, and sensors can be damaged during tire changes. We'll test each one to find the problem.",
          },
          {
            question: "Can you program sensors for new wheels?",
            answer:
              "Yes. We can install and program sensors on a new or aftermarket wheel set.",
          },
          {
            question: "Is TPMS service quick?",
            answer: "Usually, yes. Most TPMS jobs are done the same visit.",
          },
        ],
      },
    ],
  },
  {
    id: "appearance",
    label: "05",
    title: "Appearance & Protection",
    tagline: "Looks as sharp as it runs.",
    services: [
      {
        slug: "paint-protection-film",
        title: "Paint Protection Film",
        image: person,
        description:
          "Self-healing PPF on high-impact zones or full-body wraps.",
        overview:
          "Paint protection film is a clear layer that takes the hit from rock chips, scratches, and road debris so your paint doesn't. Choose high-impact zones or full-body coverage.",
        included: [
          "Paint inspection and decontamination wash",
          "Precision-cut, self-healing film",
          "Coverage options from front-end to full body",
          "Final inspection at pickup",
        ],
        process: [
          {
            title: "Consultation",
            body: "We discuss coverage options and inspect the paint condition.",
          },
          {
            title: "Prep",
            body: "The car is washed and decontaminated, and paint correction is done if needed.",
          },
          {
            title: "Install",
            body: "Film is applied panel by panel with careful edge work.",
          },
          {
            title: "Cure & Hand Off",
            body: "We inspect the install and go over care instructions with you.",
          },
        ],
        faqs: [
          {
            question: "Will PPF change how my paint looks?",
            answer:
              "Quality film is optically clear and nearly invisible once installed. Matte films are also available.",
          },
          {
            question: "Can PPF be removed?",
            answer: "Yes. It can be removed without damaging factory paint.",
          },
          {
            question: "Can I combine PPF with ceramic coating?",
            answer:
              "Yes, and it's a popular combo. The coating adds gloss and makes the film easier to clean.",
          },
        ],
      },
      {
        slug: "ceramic-coating",
        title: "Ceramic Coating",
        image: person,
        description:
          "Nano-ceramic protection with years of hydrophobic brilliance.",
        overview:
          "A ceramic coating bonds to your paint to add deep gloss and a hydrophobic layer that sheds water and dirt, making the car easier to keep clean.",
        included: [
          "Wash and chemical decontamination",
          "Paint correction to remove swirls (as needed)",
          "Ceramic coating application",
          "Care instructions",
        ],
        process: [
          {
            title: "Consultation",
            body: "We inspect the paint and recommend the right level of correction and coating.",
          },
          {
            title: "Prep & Correction",
            body: "The paint is decontaminated and polished so the coating locks in a clean finish.",
          },
          {
            title: "Coat",
            body: "The coating is applied panel by panel in a controlled environment.",
          },
          {
            title: "Cure & Hand Off",
            body: "We let it cure, inspect the finish, and walk you through aftercare.",
          },
        ],
        faqs: [
          {
            question: "Does ceramic coating prevent rock chips?",
            answer:
              "No. Coating adds gloss and makes cleaning easier, but it won't stop chips. Pair it with PPF for impact protection.",
          },
          {
            question: "How do I wash a coated car?",
            answer:
              "Hand wash with a pH-neutral soap and avoid automatic brush washes. We'll go over aftercare at pickup.",
          },
          {
            question: "Why is paint correction needed first?",
            answer:
              "The coating locks in whatever is underneath, so swirls and scratches should be corrected beforehand.",
          },
        ],
      },
      {
        slug: "window-tint",
        title: "Window Tint",
        image: person,
        description: "Precision-cut film with heat rejection and UV blocking.",
        overview:
          "Window tint keeps the cabin cooler, blocks UV, cuts glare, and adds privacy. We use precision-cut film for a clean, bubble-free finish.",
        included: [
          "Film options by shade and heat rejection",
          "Precision-cut film install",
          "Clean edges with no bubbles",
          "Aftercare instructions",
        ],
        process: STANDARD_PROCESS,
        faqs: [
          {
            question: "Is window tint legal in New York?",
            answer:
              "New York limits how dark tint can be on certain windows. Ask us about legal options for your vehicle.",
          },
          {
            question: "How long before I can roll the windows down?",
            answer:
              "Give the film a few days to cure before rolling windows down. We'll give you exact guidance at pickup.",
          },
          {
            question: "Can you remove old tint?",
            answer: "Yes. We can remove old or damaged film before installing new tint.",
          },
        ],
      },
    ],
  },
];

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({ ...service, category })),
);

export function getService(slug: string) {
  return allServices.find((service) => service.slug === slug);
}
