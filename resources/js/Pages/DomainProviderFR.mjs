
const domain = {
    host: "127.0.0.1",
    port: "3002",
}

export function getDomain() {

    return domain;
}
export function getDomainString() {

    return `${domain.host}:${domain.port}`
}
export function setDomain(host, port) {

    domain.host = host;
    domain.port = port
    return `${domain.host}:${domain.port}`
}
export default getDomainString