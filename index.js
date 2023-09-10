/*
   * Created By ArxzyDev
   * Contact https://wa.me/6289513081052
   
   * Mau Hapus? Mau Ubah? Neraka Nunggu Lu
   * Jual? Neraka Nunggu Lu
   
   * Notes:
    > Jangan Lupa Solat Bagi Agama Islam
    > Jangan Lupa Berbagi Kepada Sesama Manusia
   
   * Imam Ibnul Jauzi Berkata 
    >"Barangsiapa yang senang amalnya tidak terputus
    > setelah wataf, maka hendaklah ia menyebarkan ilmu"
   
   * Pake Sc Error? Join Saja Disini
   > https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ
   > https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ
   > https://chat.whatsapp.com/LfBvDxQujrLHihSRI6TCIZ
   
   
   * Mau Beli VPS? Panel? Chat Saja
   089513081052
   A/N
   ArxzyDev
*/

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'adrian.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
