export default function list(req, res) {
  res.status(200).json({
    message: '',
    data: [{
      name: 'luffy',
    }]
  })
}