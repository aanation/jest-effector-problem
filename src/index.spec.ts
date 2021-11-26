import { createDomain, forward } from "effector"


it("mock effects", async () => {
    const d = createDomain()

    const effectFx = d.effect<void, string, Error>()
    const event = d.event<void>()

    const $store = d.store<string | null>(null)

    $store.on(effectFx.doneData, (_, v) => v)

    console.log(event)

    forward({
        from: event,
        to: effectFx,
    })

})