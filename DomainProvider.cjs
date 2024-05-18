
const domain = {
    host: "127.0.0.1",
    port: "3002",
}

function getDomain() {

    return domain;
}
function getDomainString() {

    return `${domain.host}:${domain.port}`
}
function setDomain(host, port) {

    domain.host = host;
    domain.port = port
    return `${domain.host}:${domain.port}`
}
module.exports = { getDomain, setDomain ,getDomainString}