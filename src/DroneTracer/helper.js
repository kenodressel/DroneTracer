const formMessage = function (msg) {
    return `DroneTracer | ${msg}`
}

const errorThrow = function (msg) {
    throw formMessage(msg)
}

const errorReject = function (promiseReject, msg) {
    promiseReject(formMessage(msg))
}

export {errorThrow as throw, errorReject as reject}


export class ProgressReport {
    constructor(callback = () => {
    }) {
        this.callback = callback
        this.steps = 1
        this.step = 0
    }

    setSteps(steps) {
        this.steps = steps
    }

    setStep(step) {
        this.step = step
    }

    increaseStep() {
        ++this.step
    }

    report(full, qnt) {
        var mstep = parseFloat(qnt) / full
        var status = Math.min(1, Math.max(0, parseFloat(this.step + mstep) / this.steps))
        this.log(status)
    }

    reportIncreaseStep() {
        this.increaseStep()
        this.report(1, 1)
    }

    // 0 to 1
    log(val) {
        this.callback(val)
    }

}

export const uiParamGenerator = function (label, name, value, type = 'range', from = 0, to = 100) {
    var uiEl = {
        label: label,
        name: name,
        value: value,
        type: type
    }
    if (type === 'range') {
        uiEl.from = from
        uiEl.to = to
    }
    return uiEl
}

export const map = function (n, start1, stop1, start2, stop2) {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2
}



